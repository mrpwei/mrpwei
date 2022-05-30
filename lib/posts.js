import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

const postsDirectory = path.join(process.cwd(), "posts/blog");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html, { sanitize: false })
  //   .use(prism)
  //   .process(matterResult.content);
  const renderer = new marked.Renderer();
  renderer.code = function (code, lang, escaped) {
    code = this.options.highlight(code, lang);
    if (!lang) {
      return `<pre><code>${code}</code></pre>`;
    }
    let langClass = "language-" + lang;
    return `<pre class="${langClass} line-numbers copy-to-clipboard"><code class="${langClass}">${code}</code></pre>`;
  };

  marked.setOptions({
    renderer,
    highlight: function (code, lang) {
      try {
        return Prism.highlight(code, Prism.languages[lang], lang);
      } catch {
        return code;
      }
    },
  });
  // const processedContent = marked.parse(matterResult.content);
  // const contentHtml = processedContent.toString();
  const contentHtml = marked(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Prism from "prismjs";

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
    const matterResult = matter(fileContents, {
      excerpt_separator: "<!-- sep -->",
    });
    const excerpt = matterResult.excerpt;
    // Combine the data with the id
    return {
      id,
      excerpt,
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
    // const lines = code.split("\n");
    // lines.forEach((line, index) => {
    //   const counter = index + 1;
    //   const line$ = this.options.highlight(line, lang);
    //   let counter$ = `<span class={"line-number"}>${counter}</span>${line}`;
    //   return line$;
    // });
    code = this.options.highlight(code, lang);
    const lines = code.split("\n");
    lines.forEach((line, index, arr) => {
      const counter = index + 1;

      arr[index] = `<span class="line-numbers-rows">${counter}</span>${line}`;
    });
    if (!lang) {
      return `<pre><code>${code}</code></pre>`;
    }
    let langClass = "language-" + lang;
    return `<pre class="${langClass} line-numbers"><code class="${langClass}">${lines.join(
      "\n"
    )}</code></pre>`;
  };

  marked.setOptions({
    renderer,
    gfm: true,
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
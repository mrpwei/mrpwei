export default function PostLayout({ frontMatter, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter;
  return (
    <>
      <div className="prose dark:prose-dark">{children}</div>
    </>
  );
}

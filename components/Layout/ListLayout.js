import Link from "next/link";
import Pagination from "/components/Pagination";
import Date from "/components/date";

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <ul>
          {initialDisplayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug} className="my-6">
                <small className="text-gray-600">
                  <Date dateString={date} />
                </small>
                <br />
                <Link href={`/blog/${slug}`}>
                  <a className="text-xl font-semibold">{title}</a>
                </Link>
                <div>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="mr-4 rounded-md text-sm text-primary-500"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500">{summary}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  );
}

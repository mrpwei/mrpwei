import Link from "next/link";
import Date from "../date";

export const BlogCard = ({ id, date, title, children }) => {
  return (
    <div className="p-2">
      <small className="text-slate-200">
        <Date dateString={date} />
      </small>
      <p className="text-xl text-[#202020]">{title}</p>
      <p className="max-h-20 overflow-hidden text-slate-400">{children}</p>
      <Link href={`/blog/${id}`}>
        <a>Read full article</a>
      </Link>
    </div>
  );
};

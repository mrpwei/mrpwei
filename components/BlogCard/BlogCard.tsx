import Link from "next/link";
import Date from "../date";

export const BlogCard = ({ id, date, title, children }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="h-40 p-2 hover:cursor-pointer hover:bg-slate-50 transition-all duration-300">
        <small className="text-slate-200">
          <Date dateString={date} />
        </small>
        <p className="text-2xl text-[#202020]">{title}</p>
        <p>{children}</p>
        <a>read all</a>
      </div>
    </Link>
  );
};

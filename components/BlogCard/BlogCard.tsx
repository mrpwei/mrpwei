import Link from "next/link";
import Date from "../date";

export const BlogCard = ({ id, date, children }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="w-4/5 h-20 hover:cursor-pointer hover:bg-slate-50 transition-all duration-300">
        <small className="text-slate-200">
          <Date dateString={date} />
        </small>
        <p className="text-2xl text-[#202020]">{children}</p>
        <a>read all</a>
      </div>
    </Link>
  );
};

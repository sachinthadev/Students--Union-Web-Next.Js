import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image,  description, publishDate } = blog;
  return (
    <>
  <div className=" w-[100%] h-[500px] overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:shadow-lg dark:bg-dark">
    <div className="relative block w-full h-[80%]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4 h-[30%]">
      <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-300 truncate">
        {description}
      </p>
      <div className="text-right text-xs font-medium text-gray-500 dark:text-gray-400">
        {publishDate}
      </div>
    </div>
  </div>
</>

  );
};

export default SingleBlog;

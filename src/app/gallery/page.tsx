"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";

const Blog = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages dynamically
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Paginate data based on the current page
  const paginatedData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const setPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Gallery"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {paginatedData.length > 0 && (
            <div className="ml-[15%] mt-6 flex w-[70%] items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={() => setPage(currentPage - 1)}
                className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                  currentPage === 1
                    ? "cursor-not-allowed bg-gray-200 text-gray-500"
                    : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
                }`}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {/* Page Indicator */}
              <div className="flex items-center gap-2">
                <span>Page</span>
                <div className="w-8 rounded-md border border-gray-300 text-center">
                  {currentPage}
                </div>
                <span>of</span>
                <div className="w-8 rounded-md border border-gray-300 text-center">
                  {totalPages}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={() => setPage(currentPage + 1)}
                className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                  currentPage === totalPages
                    ? "cursor-not-allowed bg-gray-200 text-gray-500"
                    : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;

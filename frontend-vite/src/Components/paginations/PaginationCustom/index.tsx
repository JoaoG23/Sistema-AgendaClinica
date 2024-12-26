import { Pagination } from "flowbite-react";
import React, { useState } from "react";

export const PaginationCustom: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center ">
      <Pagination 
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

import { Pagination } from "flowbite-react";
import React, { SetStateAction, useState } from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export const PaginationCustom: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // const [currentPage, setCurrentPage] = useState(1);

  // const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center ">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

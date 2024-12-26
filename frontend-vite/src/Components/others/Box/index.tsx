import React from "react";

type Props = {
  children?: React.ReactNode;
};
export const Box: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
      <p>{children}</p>
    </div>
  );
};

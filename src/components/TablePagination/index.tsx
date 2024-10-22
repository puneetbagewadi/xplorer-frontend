import React from "react";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const TablePagination = ({ tableData }: { tableData: any }) => {
  return (
    <div className="flex items-center justify-end space-x-2 w-full">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8  rounded-lg bg-grey-800 p-1.5 hover:!bg-grey-800/80 "
          onClick={() => tableData.previousPage()}
          disabled={!tableData.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-6 w-6  text-white" />
        </Button>
        <span>{tableData.getState().pagination.pageIndex + 1}</span>
        <Button
          variant="outline"
          className="h-8 w-8  rounded-lg bg-grey-800 p-1.5 hover:!bg-grey-800/80"
          onClick={() => tableData.nextPage()}
          disabled={!tableData.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;

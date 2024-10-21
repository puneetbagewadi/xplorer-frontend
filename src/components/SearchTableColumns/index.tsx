import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface SearchComponentProps {
  data: any[];
  onSearch: (filteredData: any[]) => void;
  searchColumns: string[]; // specify which columns to search on
}

const SearchTableColumns: React.FC<SearchComponentProps> = ({
  data,
  onSearch,
  searchColumns
}) => {
  const [searchKey, setSearchKey] = useState<string>("");

  // Debounce effect to delay the search action
  useEffect(() => {
    const handleSearch = () => {
      const filteredData = data.filter((item) =>
        searchColumns.some((col) =>
          item[col]?.toString().toLowerCase().includes(searchKey.toLowerCase())
        )
      );
      onSearch(filteredData);
    };

    // Debouncing the search input
    const debounceTimeout = setTimeout(() => {
      handleSearch();
    }, 300); // Adjust the debounce delay as necessary

    // Cleanup function to clear the timeout
    return () => clearTimeout(debounceTimeout);
  }, [searchKey, data, searchColumns, onSearch]);

  return (
    <>
      <div className="w-[75%] lg:w-[40%] ">
        <div className="relative cursor-pointer">
          <input
            className=" font-m_plus_2 placeholder:text-text-300 focus:ring-transparent block w-full  border border-grey-300 bg-grey-white p-4 text-text-500 caret-black focus:outline-none pl-12 rounded-xl"
            placeholder="Search ID / Address / Transactions"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <Image
            className="absolute left-4 top-1/2 -translate-y-1/2"
            src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/search_grey.svg"
            alt="search"
            width={24}
            height={24}
          />
        </div>
      </div>
    </>
  );
};

export default SearchTableColumns;

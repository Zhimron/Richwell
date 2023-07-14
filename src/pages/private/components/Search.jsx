import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
export const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="bg-white h-[10%] w-full pt-2 pl-2 shadow-lg fixed ">
        <div className="p-2 flex gap-56 ">
          <div className="flex-wrap  ml-4 mt-2">
            <h1 className="text-gray-500 text-lg font-bold">Admin Dashboard</h1>
          </div>

          <div className="relative mt-1">
            <span
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${
                searchText ? 'hidden' : ''
              }`}>
              <SearchIcon className="h-[9%] text-gray-500" />
            </span>
            <input
              type="text"
              className="w-[120%] py-1 rounded-md bg-gray-200 pl-[40px]"
              placeholder="Search"
              value={searchText}
              onChange={handleInputChange}
            />
          </div>

          <img
            src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-1/327766033_6657013251017980_7627866395686958832_n.jpg?stp=c8.12.333.334a_cp0_dst-jpg_s40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ULEcQPc0nk4AX9esJpj&_nc_ht=scontent.fmnl25-2.fna&oh=00_AfCJHqvLdTrRNFjwC89SVzYopkJ3FZd76EK3TvEDtleUSw&oe=646C1632"
            className="img-fluid rounded-full"
            alt="avatar"
            style={{ position: 'fixed', top: '1rem', right: '2rem' }}
          />
        </div>
      </div>
    </>
  );
};

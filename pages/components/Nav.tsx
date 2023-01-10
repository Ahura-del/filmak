import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { ChangeEvent, useCallback, useState } from "react";

// moviesapi.ir/api/v1/movies?q={name}&page={page}

interface SearchType {
  search:string;
  searchMovie:(e: ChangeEvent<HTMLInputElement>)=>void
}
  const Nav: NextPage<SearchType> = ({search , searchMovie}) => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  // const [search, setSearch] = useState<string>("");
  // const router = useRouter();
  // const searchMovie = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  //   router.push(`/&name=${e.target.value}`);
  // }, []);
  return (
    <nav className="w-full py-4 bg-slate-900">
      <div className="w-3/4 mx-auto flex justify-between items-center">
        <p className="text-white font-semibold text-xl">Filmak</p>
        <div className="flex gap-5 ">
          {searchVisible && (
            <input
              onChange={searchMovie}
              type="search"
              value={search}
              className="border-none  rounded-sm px-1 bg-slate-500 text-slate-100 placeholder:text-slate-100 focus:outline-none"
              placeholder="Search movie..."
            />
          )}
          <button
            className="text-slate-100"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                fill="currentColor"
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

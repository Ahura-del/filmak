import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DataType } from "../lib/interfaces";

const Cart: NextPage<DataType> = ({ item }) => {
  const [genre, setGenre] = useState<string>("");
  useEffect(() => {
    let genreName = "";
    item.genres.forEach((genre) => {
      genreName += genre + " ";
    });
    setGenre(genreName);
  }, [item]);
  return (
    <div className="flex flex-col rounded-md bg-slate-900 w-full h-[500px] mb-5 cursor-pointer group hover:shadow-lg hover:scale-105 transition-all duration-300 ">
      <div className="basis-3/4 w-full h-full relative ">
        <Image
          src={item.poster}
          layout="fill"
          className="rounded-t-md"
          objectFit="cover"
        />
        <div className=" flex items-center justify-center w-full h-full group-hover:bg-[rgba(0,0,0,0.8)] transition-all duration-300  absolute top-0 right-0 rounded-t-md" >
            <img src="/assets/more.png" className="hidden group-hover:inline-block " />
        </div>
        <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-slate-900 to-transparent h-24" />
      </div>
      <div className="basis-1/4 px-2">
        <p className="text-gray-50 mb-2 font-bold">{item.title}</p>
        <p className="text-gray-500 mb-1 text-xs">
          <span>
            {item.country} - {item.year}
          </span>
        </p>
        <p className="text-gray-500 mb-1 text-xs">Genre: {genre}</p>
        <p className="text-yellow-400 text-xs">IMDB rate: {item.imdb_rating}</p>
      </div>
    </div>
  );
};

export default Cart;

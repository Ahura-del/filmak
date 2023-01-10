import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalText from "./ModalText";

interface ModalType {
  id: number;
  modalHandle: () => void;
}

const Modal: NextPage<ModalType> = ({ id, modalHandle }) => {
  const [movie, setMovie] = useState<any | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`);
      const data = await response.json();
      setMovie(data);
    };
    getMovies();
  }, [id]);

  if (movie === null) return <p>Loading...</p>;
  return (
    <div className="fixed bg-slate-800 z-40 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex gap-3 p-4 rounded-lg w-[800px] h-[500px]">
      <div className="basis-1/3 relative">
        <Image
          src={movie?.poster}
          alt={movie?.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="basis-2/3 overflow-y-scroll scrollbar-hide">
        <div className="w-full flex justify-end">
          <button className="pr-2" onClick={modalHandle}>
            <img src="/assets/close.svg" alt="" className="w-8 h-8" />
          </button>
        </div>
        <p className="text-white text-2xl font-semibold mb-5">
          {movie?.title} - {movie?.year}
        </p>
        <ModalText title="Summary - " text={movie?.plot} />
        <ModalText title="Actors - " text={movie?.actors} />
        <ModalText title="Director - " text={movie?.director} />
        <ModalText title="Writer - " text={movie?.writer} />
        <ModalText title="Country - " text={movie?.country} />
        <ModalText title="Awards - " text={movie?.awards} />
        <ModalText title="IMDB - " text={movie?.imdb_rating} />

        {movie?.images?.map((image, indx) => (
          <img src={image} key={indx} alt="another pic" />
        ))}
      </div>
    </div>
  );
};

export default Modal;

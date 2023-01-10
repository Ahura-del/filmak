import { NextPage } from "next";
interface PaginationTypes {
  pages: number;
  currentPage: string;
  incrementPage: () => void;
  decrementPage: () => void;
}
const Pagination: NextPage<PaginationTypes> = ({
  pages,
  incrementPage,
  decrementPage,
  currentPage,
}) => {
  let PCounts: number[] = [];
  for (let i: number = 1; i <= pages; i++) {
    PCounts.push(i);
  }
  return (
    <div className="w-full py-3 mb-5 flex flex-col gap-5 items-center justify-center">
      <p className="text-gray-500">
        Showing <span className="text-white"> {PCounts[0]}</span> to{" "}
        <span className="text-white"> {PCounts[PCounts.length - 1]}</span>
      </p>
      <div className="w-full flex gap-5 items-center justify-center">
        <button
          disabled={currentPage === "1"}
          onClick={decrementPage}
          className="h-10 w-10 bg-slate-600 text-white flex items-center justify-center rounded-lg"
        >
          {"<"}
        </button>

        <p className="h-10 w-10 bg-slate-600 text-white flex items-center justify-center rounded-lg">
          {currentPage}
        </p>

        <button
          disabled={parseInt(currentPage) === PCounts[PCounts.length - 1]}
          onClick={incrementPage}
          className="h-10 w-10 bg-slate-600 text-white flex items-center justify-center rounded-lg"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;

import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Modal = lazy(() => import("./components/Modal"));
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";
import { DataType } from "./lib/interfaces";

const Home: NextPage<any> = ({ res, page, q }) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [modal, setModal] = useState<any>({ show: false, id: 0 });
  const incrementPage = (): void => {
    router.push(`/?page=${page + 1}`);
  };
  const decrementPage = (): void => {
    router.push(`/?page=${page - 1}`);
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const clickHandler = (id: number) => {
    setModal({ show: true, id });
  };

  const modalHandle = () => {
    setModal({ show: false, id: 0 });
  };

  useEffect(() => {
    router.push(`/?q=${search}`);
  }, [search]);
  return (
    <div className="w-full bg-gray-900 relative">
      {/* nav */}
      <Nav search={search} searchMovie={searchHandler} />
      {/* header */}
      <Header />
      {/* carts */}
      <div className="w-3/4 mx-auto grid grid-cols-5 gap-3 relative z-30">
        {res.data?.map((item): DataType | any => (
          <Card key={item.id} item={item} clickHandler={clickHandler} />
        ))}
      </div>
      {/* pagination */}
      <Pagination
        pages={res.metadata.page_count}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        currentPage={res.metadata.current_page}
      />
      {/* footer */}
      <Footer />
      {modal.show && (
        <Suspense fallback={<p>Loading...</p>}>
          <Modal id={modal.id} modalHandle={modalHandle} />
        </Suspense>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { page = 1, q = "" },
  } = context;

  const response = await fetch(
    `https://moviesapi.ir/api/v1/movies?page=${page}&q=${q}`
  );
  const res = await response.json();
  return {
    props: {
      res,
      page: +page,
      q,
    },
  };
};

export default Home;

import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";
import { DataType } from "./lib/interfaces";

const Home: NextPage<any> = ({ res, page }) => {
  // console.log(res.metadata);
  // console.log(page);
  const router = useRouter();
  const incrementPage = (): void => {
    router.push(`/?page=${page + 1}`);
  };
  const decrementPage = (): void => {
    router.push(`/?page=${page - 1}`);
  };

  return (
    <div className="w-full bg-gray-900">
      {/* nav */}
      <Nav />
      {/* header */}
      <Header />
      {/* carts */}
      <div className="w-3/4 mx-auto grid grid-cols-5 gap-3 relative z-30">
        {res.data?.map((item): DataType | any => (
          <Cart key={item.id} item={item} />
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const response = await fetch(
    `https://moviesapi.ir/api/v1/movies?page=${page}`
  );
  const res = await response.json();
  return {
    props: {
      res,
      page: +page,
    },
  };
};

export default Home;

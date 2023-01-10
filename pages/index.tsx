import type { GetStaticProps, NextPage } from 'next'
import Cart from './components/Cart';
import Nav from './components/Nav'
import { DataType } from './lib/interfaces';



const Home: NextPage<any> = ({res}) => {
console.log(res);
  return (
    <div className='w-full bg-slate-800'>
      {/* nav */}
    <Nav/>
      {/* carts */}
      <div className='w-3/4 mx-auto grid grid-cols-5 gap-3'>
      {res.data?.map((item):(DataType | any) =>(
        <Cart key={item.id} item={item} />
        ))}
        </div>
      {/* navigation */}
      {/* footer */}
    </div>
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  const response = await fetch('https://moviesapi.ir/api/v1/movies?page={1}')
  const res = await response.json()
  return{
    props:{
      res
    }
  }
}

export default Home

import Link from 'next/link'
import AllProducts from '../../components/AllProducts';
import { useContext, useState } from 'react';
import { Context } from '../../context/MyContext'


export const getStaticProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch('http://localhost:4000/api/products')
    const data = await res.json();

    return {
        props: { products: data }
    }
}

//<a> {product.name} <span>{product.price}</span> {product.market}</a>
const Products = ({ products }) => {
    // <h1> all products here  </h1>
    const { filter } = useContext(Context);
    const [filteredProducts,setFilteredProducts] = useState('All')
    const handleClick = (e) =>{
        // e.preventDefault();
         setFilteredProducts(e.target.innerText)
       
    }
   
    /*  <div className='flex flex-row justify-center items-center gap-16 text-2xl text-lime-700 mb-10'>
                <button className='hover:cursor-pointer active:text-lime-400 focus:text-lime-400'onClick={handleClick}>All</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Lidl</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Aldi</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Rewe</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Penny</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Netto</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Kaufland</button>
            </div>*/
    
    return (
        <div className=' flex flex-col justify-center items-center content-center gap-7 font-mar w-3/4'>
           
          <div className='flex flex-row justify-center items-center gap-16 text-2xl text-lime-700 mb-10'>
                <button className='hover:cursor-pointer active:text-lime-400 focus:text-lime-400'onClick={handleClick}>All</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Lidl</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Aldi</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Rewe</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Penny</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Netto</button>
                <button className='hover:cursor-pointer  active:text-lime-400 focus:text-lime-400'onClick={handleClick}>Kaufland</button>
            </div>
            <div className="w-3/4 md:grid md:grid-cols-3 self-center gap-6 justify-center items-center mx-auto text-2xl grid grid-cols-1 ">

                {products.map((product,i) => {
                    return (
                     //  <Link href={'/products/' + product._id}><AllProducts product={ product} i={i}/></Link>
                     <AllProducts product={product} i ={i} filteredProducts = {filteredProducts}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Products;
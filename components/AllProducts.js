import { useRouter } from 'next/router'
import { Context } from '../context/MyContext'
import { useContext, useEffect, useRef, useState } from 'react'



const AllProducts = ({ product, i, filteredProducts }) => {
    /* const router = useRouter()*/
    const { shoppingData } = useContext(Context);
    const [data, setData] = shoppingData
    const addBtnRef = useRef(null)
    const productRef = useRef(null)
    

    useEffect(() => {
        productRef.current.classList.add(product.market)
        console.log(filteredProducts)
        changeBtn()
        productRef.current.classList.add('hidden')
        if (filteredProducts === 'All') {

        }
        if (productRef.current.classList.contains(filteredProducts) || filteredProducts === 'All') {
            productRef.current.classList.remove('hidden')
        }

    }, [data, filteredProducts])

    const changeBtn = () => {

        data.map(p => {
            //if(data.includes(product)){
            console.log(addBtnRef.current.id)
            if (p._id === addBtnRef.current.id) {
                addBtnRef.current.classList.add('bg-red-500')
                addBtnRef.current.classList.remove('bg-lime-600')
                addBtnRef.current.innerText = '-'
            }
        })

    }
    /*const fadeOutEffect = (target) => {
        var fadeTarget = document.getElementById(target);
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 1000);
    }*/
    const addToCart = (e) => {
        e.preventDefault()
        if (!data.includes(product)) {
            setData(data => [...data, product])
            let fadeTarget = document.getElementById(`addedMsg${product._id}`)
            //addedMsg.classList.add()
             console.log(fadeTarget.id)
            //let content = document.getElementById('content')
           // content.appendChild(addedMsg)
           // console.log(content.className)
           fadeTarget.classList.remove('hidden')
            var fadeEffect = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity -= 0.1;
                } 
                else {
                    clearInterval(fadeEffect);
                }
            }, 200);
            
               // addedMsg.classList.add('animate-fadeOut');
              
              
        }
        else {
            setData(data.filter(p => p._id !== product._id))
            addBtnRef.current.classList.add('bg-lime-600')
            addBtnRef.current.classList.remove('bg-red-500')

            addBtnRef.current.innerText = '+'
        }

    }

    return (
        <div ref={productRef} className='h-80 flex flex-col justify-between pt-8 pb-8 items-center shadow-black shadow-lg rounded-lg bg-white relative'>

            <img className=' w-32 h-32' src={`products-images/${product.name}.jpg`} />

            <div className='flex flex-col justify-center items-center gap-4 '>
                <p className='text-lg '>{product.name} </p>
                <p className='text-3xl text-red-500'>{product.price}&euro;</p>
                <img className=' w-10 h-10' src={`products-images/${product.market}.png`} alt='All' />
            </div>

            <button className='w-12 h-12 text-2xl font-bold shadow-lg shadow-black 
                p-2 mt-2 rounded-full text-white bg-lime-600 absolute right-2 bottom-2' id={product._id} onClick={addToCart} ref={addBtnRef} >+</button>

            <span id={`addedMsg${product._id}`} className=' border-2 bg-lime-500 rounded-md w-64 h-24 text-base text-center justify-center items-center absolute top-32 left-2 z-10 hidden'> {product.name} Has been added successfully to the Shopping List</span>

        </div>



    );
}

export default AllProducts;

// i need to change the markets sorting menu because it's not fuctioning properly ... done 
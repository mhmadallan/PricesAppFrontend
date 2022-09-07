import { useRouter } from 'next/router'
import { Context } from '../context/MyContext'
import { useContext, useRef } from 'react'


const ShoppingList = () => {
    const {shoppingData,addedData} = useContext(Context)
    const [data,setData] = shoppingData
    const [found,setFound] = addedData
    // this useRef array is instead of getElementById it references the <h1></h1> that contains the products names
    const productNameRefs = useRef([])

    //let mrktArr = ['Aldi','Rewe']
    /* const router = useRouter()
     const data = router.query*/

    const AldiProducts = data.filter(product => product.market === 'Aldi')
    const NettoProducts = data.filter(product => product.market === 'Netto')
    const ReweProducts = data.filter(product => product.market === 'Rewe')
    const LidlProducts = data.filter(product => product.market === 'Lidl')
    const KauflandProducts = data.filter(product => product.market === 'Kaufland')
    const PennyProducts = data.filter(product => product.market === 'Penny')

    // this function is to add line through css to the products that have been bought already
    const checked = (e) => {
        if(e.target.checked){
            for(let i=0;i<productNameRefs.current.length;i++){
                if(e.target.id === productNameRefs.current[i].innerText){
                    productNameRefs.current[i].classList.add('line-through')
                }
            }
        }
        else{
            for(let i=0;i<productNameRefs.current.length;i++){
                if(e.target.id === productNameRefs.current[i].innerText){
                    productNameRefs.current[i].classList.remove('line-through')
                }
            }
            
            
        }
    }
    // this function to create the div that will contain the Netto products in case they exist
    const DivNetto = () => {
        if (NettoProducts.length !== 0) {
            return (

                <div className=' bg-white text-lg p-2 border-2 shadow-lg shadow-black rounded-lg w-full'>
                    {NettoProducts.length != 0 && <img className=' w-16 h-16 mb-8' src={`products-images/Netto.png`} />}
                    {

                        NettoProducts && NettoProducts.map((product) => (
                            <div className='flex flex-row items-start justify-between mx-8'>

                                <h1>{product.name}</h1>
                                <h1 className='text-xl text-red-600'>{product.price}&euro;</h1>

                            </div>

                        ))
                    }

                </div>
            )
        }
    }

    // to create div for Aldi products in case they exist
    const DivAldi = () => {
        if (AldiProducts.length !== 0) {
            return (

                <div className=' bg-white text-lg p-2 border-2 shadow-lg shadow-black rounded-lg w-full'>
                    {AldiProducts.length != 0 && <img className=' w-16 h-16 mb-8' src={`products-images/Aldi.png`} />}
                    {

                        AldiProducts && AldiProducts.map((product) => (
                            <div className='flex flex-row items-start justify-between mx-4'>

                                <h1>{product.name}</h1>
                                <h1 className='text-xl text-red-600'>{product.price}&euro;</h1>
                            </div>

                        ))
                    }

                </div>
            )
        }
    }

    // to create div for Rewe products in case they exist
    const DivRewe = () => {
        if (ReweProducts.length !== 0) {
            return (

                <div className=' bg-white text-lg p-2 border-2 shadow-lg shadow-black rounded-lg w-full'>
                    {ReweProducts.length != 0 && <img className=' w-16 h-16 mb-8' src={`products-images/Rewe.png`} />}
                    {

                        ReweProducts && ReweProducts.map((product) => (
                            <div className='flex flex-row items-start justify-between mx-8'>

                                <h1>{product.name}</h1>
                                <h1 className='text-xl text-red-600'>{product.price}&euro;</h1>

                            </div>

                        ))
                    }

                </div>
            )
        }
    }

    // to create div for Penny products in case they exist
    const DivPenny = () => {
        if (PennyProducts.length !== 0) {
            return (

                <div className=' bg-white text-lg p-2 border-2 shadow-lg shadow-black rounded-lg w-full'>
                    {PennyProducts.length != 0 && <img className=' w-16 h-16 mb-8' src={`products-images/Penny.png`} />}
                    {

                        PennyProducts && PennyProducts.map((product) => (
                            <div className='flex flex-row items-start justify-between mx-8'>

                                <h1>{product.name}</h1>
                                <h1 className='text-xl text-red-600'>{product.price}&euro;</h1>

                            </div>

                        ))
                    }

                </div>
            )
        }
    }

    // to create div for Lidl products in case they exist
    const DivLidl = () => {
        if (LidlProducts.length !== 0) {
            return (

                <div className=' bg-white text-lg p-2 border-2 shadow-lg shadow-black rounded-lg w-full'>
                    {LidlProducts.length != 0 && <img className=' w-16 h-16 mb-8' src={`products-images/Lidl.png`} />}
                    {

                        LidlProducts && LidlProducts.map((product) => (
                            <div className='flex flex-row items-start justify-between mx-8'>

                                <h1>{product.name}</h1>
                                <h1 className='text-xl text-red-600'>{product.price}&euro;</h1>

                            </div>

                        ))
                    }

                </div>
            )
        }
    }

    // to create div for Kaufland products in case they exist
    const DivKaufland = () => {
        if (KauflandProducts.length !== 0) {
            return (

                <div className=' bg-white text-lg p-2 border-2 shadow-lg shadow-black rounded-lg w-full '>
                    {KauflandProducts.length != 0 && <img className=' w-16 h-16 mb-4' src={`products-images/Kaufland.png`} />}
                    {

                        KauflandProducts && KauflandProducts.map((product,index) => (
                            <div className='flex flex-row items-start mx-4 mb-2 justify-between'>
                                
                                <div className='flex flex-row gap-4'>
                                    <h1 className='text-xl text-red-600'>{product.price}&euro;</h1>
                                    <h1 ref={(elemnet) => { productNameRefs.current[index] = elemnet}}>{product.name}</h1>
                                </div>
                                <input type="checkbox" id={product.name} className=' w-6 h-6' onChange={checked}></input>

                            </div>

                        ))
                    }

                </div>
            )
        }
    }

    return (

        <div className='flex flex-col w-5/12 gap-6 text-black font-mar justify-center items-center'>

            <DivNetto />
            <DivAldi />
            <DivLidl />
            <DivPenny />
            <DivRewe />
            <DivKaufland />

        </div>
    )
}

export default ShoppingList;
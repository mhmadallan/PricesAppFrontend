import Link from 'next/link'
const Navbar = () => {
    return ( 
        <div className="w-full h-20 bg-lime-600 flex flex-row justify-between items-center mb-32 text-white">
            <img src='DeBudget.png' width='60px' height='60px' className='ml-3 rounded-full'/>
            <div className='flex flex-row gap-8 mr-20 text-lg'>
            <Link href="/"><a> Home </a></Link>
            <Link href="/about"><a> About</a></Link>
            <Link href="/products"><a> All Products </a></Link>
            <Link href="/shoppingList"><a> Shopping List</a></Link>
            </div>
        </div>
     );
}
 
export default Navbar;

// must be done
// under the categories the markets need to be added and so the products can be filtered according to them as well ... done
// add the contact info to the footer ... done
// a shopping list need to be created ... done
// when a product is added then the shopping list will be organized based on the market .. done
// checkbox next to products in the shopping list to indicate that the product has been bought ... done
// line through to chacek the products that have benn checked .. done
// need to show a pop up or a notification that the product has been added to the shopping list .. done


// counter next to the products in the shopping list to change the number of products that we want to buy
// display the total price that the user will spend in each supermarket and the sum of all the totals underneath
// change the logo
// images need to be modified to be at the same size 
// add the real products to the app and lauch it

// nice to have
// nice to have categories need to be added above the products and the products must be filtered accordingly 
// nice to have: a comparison button on which the product will be compared by price and quality to other products 
// nice to have a suggestion form in which the user can name other products to be added to the app
// nice to have rating for the products 
// nice to have animation when the product is added to the shopping list
// nice to have add a donation buttton to the footer
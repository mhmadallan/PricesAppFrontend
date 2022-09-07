export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:4000/api/products');
    const data = await res.json();

    // the id property in mongdb is _id
    const paths = data.map(product => {
        return {
            params : { id : product._id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => { // where context is paths[idPos] where idPos is the position of the clicked id in the paths array
    const id = context.params.id;// if the product id for the product that has been clicked is 1 then const id = paths[0].params.id that is 1 
    //const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const res = await fetch('http://localhost:4000/api/products/' + id);
    const data = await res.json();

    return {
        props:{product:data}
    }
}

const Details = ({product}) => {
    return ( <div className="single">
        <h1> normal details page</h1>
        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.market}</p>
    </div> );
}
 
export default Details;
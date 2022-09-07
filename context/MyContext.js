import { createContext, useContext, useState } from "react";

export const Context = createContext();

// the component that will wrap the app component to get access to the global state where children is everything in our app
export const ProductContextProvider = ({children}) => {

    const [data,setData] = useState([]);
    const [found,setFound] = useState([])
    const [filteredData,setFilteredData] = useState('')
    
    return(
        <Context.Provider value={{shoppingData:[data,setData],addedData:[found,setFound],filter:[filteredData,setFilteredData]}}>
            {children}
        </Context.Provider>
    )
}


import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocs } from "../utils/firebase/firebase.utils";
import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
   categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
   const [categoriesMap, setCategoriesMap] = useState({});

   useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      setCategoriesMap(categoryMap);
      console.log(categoryMap)
    };
    getCategoriesMap();
   }, [])

   const value = { categoriesMap }

   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
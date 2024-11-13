import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";
// import { addCollectionsAndDocument } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

//initialise usecontext
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // the use effect is only needed once to write our data to firestore since we are using the front end to interact with our db.
  // useEffect(() => {
  //   addCollectionsAndDocument("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    // async function to get the shop data from firestore
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

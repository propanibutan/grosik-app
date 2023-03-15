import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "../../data/firebase_config";

import s from "./DataTable.module.scss";

//temp data source
import TempData from "../../data/csvjson.json";

const DataTable = () => {

   const [products, setProducts] = useState([]);
   const [categoryFilter, setCategoryFilter] = useState('');

   const productsCollectionRef = collection(database, "products");

   const getCategoryOnly = [];
   TempData.forEach(item => {getCategoryOnly.push(item.Category)});
   const CategoryForFilter = [...new Set(getCategoryOnly)];
   const FilteredData = TempData.filter(i => {
      return i.Category === categoryFilter
   })

   useEffect(() => {
      const getProductData = async () => {
         try{
            const data = await getDocs(productsCollectionRef);
            const productdata = data.docs.map( doc => ({...doc.data(), id: doc.id}))
            setProducts(productdata);
         } catch(err) {
            console.log(err);
         }
      }
      getProductData();
   },[])

   return(
      <>
         <div>
            {
               CategoryForFilter.map((item, id) => {
                  return(
                     <button key={id} onClick={() => setCategoryFilter(categoryFilter === item ? '' : item)} style={{backgroundColor: categoryFilter === item ? 'lightblue' : ''}}>{item}</button>
                  )
               })
            }
            <button onClick={() => setCategoryFilter('')}>Wyczyść</button>
         </div>
         <table>
            <thead>
               <tr>
                  <th>Produkt</th>
                  <th>Ilość</th>
                  <th>Jednostka</th>
                  <th>Kategoria</th>
                  <th>Cena Lidl</th>
                  <th>Cena Kaufland</th>
                  <th>Cena Carrefour</th>
                  <th>Cena Biedronka</th>
               </tr>
            </thead>
            <tbody>
               {(categoryFilter.length === 0 ? TempData : FilteredData).map(item => {
                  return(
                     <tr key={item.Id}>
                        <th>{item.Products}</th>
                        <td>{item.Quantity}</td>
                        <td>{item.Unit}</td>
                        <td>{item.Category}</td>
                        <td>{item.PriceLidl}</td>
                        <td>{item.PriceKaufland}</td>
                        <td>{item.PriceCarrefour}</td>
                        <td>{item.PriceBiedronka}</td>
                     </tr>
                  )
               })}
               {/* {products.map((i, id) => {
                  return(
                     <tr key={id}>
                        <th>{i?.product}</th>
                        <td>{i?.quantity}</td>
                        <td>{i?.unit}</td>
                        <td>{i?.productGroup}</td>
                        <td>{i?.priceLidl}</td>
                        <td>{i?.priceKaufland}</td>
                        <td>{i?.priceCarrefour}</td>
                        <td>{i?.priceBiedronka}</td>
                     </tr>
                  )
               })} */}
            </tbody>
         </table>
      </>
   )
}

export default DataTable;
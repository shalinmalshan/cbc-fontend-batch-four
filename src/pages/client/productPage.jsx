import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../components/loader"
import ProductCard from "../../components/product-card"

export default function ProductsPage(){


    const [productList,setProductList]=useState([])
    const [productsLoaded,setProductsLoaded]=useState(false)
    useEffect(
        ()=>{

            if(!productsLoaded){

                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                    (res)=>{
                        setProductList(res.data)
                        setProductsLoaded(true)
                    }

                )
            }
        },[productsLoaded]
    )



    return(


        <div className="h-full w-full ">
            {
                productsLoaded?
                <div className="w-full h-full flex flex-wrap justify-center">
                    {
                        productList.map(
                            (product)=>{
                                return(
                                   <ProductCard product={product} key={product.productId}/>

                                )
                            }
                        )
                    }

                </div>
                :
                <Loader />
            }

        </div>
    )
}
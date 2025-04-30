import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import Loader from "../../components/loader"
import ImageSlider from "../../components/imageSlider"
import getCart, { addToCart } from "../../../utils/cart"

export default function ProductOverview() {
    const params = useParams()
    if (params.id == null) {
        window.location.href = "/products"
    }
    const [product, setProduct] = useState(null)
    const [status, setStatus] = useState("loading")
    useEffect(
        () => {
            if (status == "loading") {
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product/" + params.id).then(
                    (res) => {
                        console.log(res)
                        setProduct(res.data.product)
                        setStatus("loaded")
                    }
                ).catch(
                    () => {
                        toast.error("Product is not available")
                        setStatus("error")
                    }
                )
            }
        }, [status]
    )

    return (
        <div className="w-full h-full ">

            {
                status == "loading" && <Loader />
            }

            {
                status == "loaded" &&
                <div className="w-full h-full flex ">
                    <div className="w-[50%] h-full ">
                        <ImageSlider images={product.images} />
                    </div>
                    <div className="w-[50%] h-full p-[40px] ">
                        <h1 className="text-3xl text-center font-bold mb-[40px]">{product.name} {" | "}<span className="text-3xl mr-[20px] text-gray-500 ">{product.altNames.join(" | ")}</span></h1>
                        <h2 className="text-3xl font-semibold text-center text-gray-500"></h2>
                        <div className="w-full flex justify-center mb-[40px]">

                            {product.labeledPrice > product.price ? (
                                <>
                                    <h2 className="text-2xl mr-[20px]">LKR: {product.price.toFixed(2)}</h2>
                                    <h2 className="text-2xl line-through text-gray-500">LKR: {product.labeledPrice.toFixed(2)}</h2>
                                </>

                            ) : (
                                <h2 className="text-2xl mr-[20px]">{product.price.toFixed(2)}</h2>
                            )}

                        </div>


                        {/* <h2 className="text-3xl font-semibold text-center text-gray-500">LKR: {product.price.toFixed(2)} <span className="line-through text-gray-400 text-sm"> {product.price < product.labeledPrice && product.labeledPrice.toFixed(2)}</span> </h2> */}
                        <p className="text-xl text-center text-gray-500 mb-[40px]">{product.description}</p>
                        <div className="w-full flex justify-center mb-[40px]">

                            <button onClick={
                                ()=>{
                                    addToCart(product,1)
                                    toast.success("Added to cart")
                                    console.log(getCart())
                                }
                            } className="bg-pink-800 border border-pink-800  text-white w-[200px] h-[50px] px-[20px] py-[10px] rounded-lg hover:bg-white hover:text-pink-800 transition-all duration-300 cursor-pointer">Add to Cart</button>
                            <button className="bg-pink-800 border border-pink-800 text-white w-[200px] h-[50px] px-[20px] py-[10px] rounded-lg hover:bg-white hover:text-pink-800   transition-all duration-300 ml-[20px] cursor-pointer ">Buy Now</button>



                        </div>

                    </div>
                </div>
            }
            {
                status == "error" && <div> Error </div>
            }

        </div>
    )
}
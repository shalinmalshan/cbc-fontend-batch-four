import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminPoductPage() {

    const [products, setProducts] = useState([])

    useEffect(
        () => {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/Product").then(
                (response) => {
                    console.log(response.data)
                    setProducts(response.data)
                }
            )
        }
        ,
        []
    )






    return (


        <div className="w-full h-full rounded-lg relative">
            <Link to={"/admin/addProduct"} className="text-white bg-gray-700 p-[12px] text-3xl rounded-full cursor-pointer hover:bg-gray-300 hover:text-gray-700 absolute right-5 bottom-5">
            <FaPlus />
            </Link>


            <table className="w-full" >
                <thead className="">
                    <tr>
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price   </th>
                        <th className="p-2">Lable Price</th>
                        <th className="p-2">Stock</th>



                    </tr>


                </thead>
                <tbody>
                    {
                        products.map(
                            (product, index) => {
                                console.log("mapping" + product.productId)
                                return (
                                    <tr key={index} className="border-b-2 border-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer text-center">
                                        <td className="p-2">{product.productId}</td>
                                        <td className="p-2">{product.name}</td>
                                        <td className="p-2">{product.price}</td>
                                        <td className="p-2">{product.labelPrice}</td>
                                        <td className="p-2">{product.stock}</td>


                                    </tr>
                                )
                            }

                        )
                    }


                </tbody>
            </table>



        </div>





    )

}
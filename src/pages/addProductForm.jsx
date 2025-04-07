import axios from "axios";
import { use, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import MeadiaUpload from "../../utils/mediaUpload";

export default function AddProductForm() {

    const [productId, setProductId] = useState("")
    const [name, setName] = useState("")
    const [altName, setAltName] = useState("")
    const [price, setPrice] = useState("")
    const [labeledPrice, setLabeledPrice] = useState("")
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState("")
    const navigate = useNavigate()
    const [images, setImages] = useState([])


    async function handleSubmit() {
        const promiseArray = []
        for (let i = 0; i < images.length; i++) {
            const promise = MeadiaUpload(images[i])
            promiseArray[i] = promise
        }

        try {

            const result = await Promise.all(promiseArray)


            const altNamesInArray = altName.split(",")
            const product = {
                productId: productId,
                name: name,
                altNames: altNamesInArray,
                price: price,
                labeledPrice: labeledPrice,
                description: description,
                stock: stock,
                images: result
            }
            const token = localStorage.getItem("token")
            console.log(token)
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/product", product, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            toast.success("product added successfully")
            navigate("/admin/products")
        }catch(err){
            toast.error("product adding failed")
            console.log(err)
        }


    }
    return (
        <div className="w-full h-full rounded-lg  flex justify-center items-center">
            <div className="w-[500px] h-[600px] rounded-lg shadow-lg flex items-center flex-col ">

                <h1 className="text-3xl font-bold text-gray-700 m-[10px]"> Add Product </h1>
                <input

                    value={productId}

                    onChange={
                        (e) => {
                            setProductId(e.target.value)

                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="product ID" />
                <input

                    value={name}
                    onChange={
                        (e) => {
                            setName(e.target.value)

                        }
                    }

                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="product Name" />
                <input
                    value={altName}
                    onChange={
                        (e) => {
                            setAltName(e.target.value)

                        }
                    }

                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="Altenative Names" />
                <input
                    value={price}
                    onChange={
                        (e) => {
                            setPrice(e.target.value)

                        }
                    }

                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="Price" />
                <input
                    value={labeledPrice}
                    onChange={
                        (e) => {
                            setLabeledPrice(e.target.value)

                        }
                    }
                    type="number"
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="Lablled Price" />
                <textarea

                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)

                        }
                    }

                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="Description" />

                <input

                    type="file"
                    onChange={
                        (e) => {
                            setImages(e.target.files)
                        }
                    }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="Upload Images"
                    multiple
                />





                <input
                    value={stock}
                    onChange={
                        (e) => {
                            setStock(e.target.value)

                        }
                    }
                    type="number"
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" placeholder="Stock" />

                <div className="w-[400px] h-[100px] flex justify-between items-center rounded-lg  ">
                    <button onClick={handleSubmit} type="submit" className="bg-green-500 text-center cursor-pointer text-white p-[10px] rounded-lg w-[180px] hover:bg-green-600">Add Product</button>
                    <Link to={"admin/products"} className="bg-red-500 text-center text-white p-[10px] rounded-lg w-[180px] hover:bg-red-600" >Cancel</Link>
                </div>


            </div>


        </div>
    )
}





// project url https://vzkmtbdcbuxxtsmnjwcl.supabase.co

// anon key eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6a210YmRjYnV4eHRzbW5qd2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMDEwMzMsImV4cCI6MjA1OTU3NzAzM30.8ANyv1F_-jDYIar7MYjJS3kxqxGaZ8Dy5FMDN9Xe_ZA
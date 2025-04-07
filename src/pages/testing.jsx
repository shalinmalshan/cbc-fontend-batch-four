import { useState } from "react"
import toast from "react-hot-toast"
import MeadiaUpload from "../../utils/mediaUpload"


export default function Testing() {
    const [file, setFile] = useState(null)

    function handleUpload() {
        MeadiaUpload(file).then(
            (url)=>{
                console.log(url)
                toast.success("file uploaded successfully")
            }
        ).catch(
            (err)=>{
                console.log(err)
                toast.error("file not uploaded")
            }
        )
    }
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <input type="file" onChange={

                (e) => {
                    setFile(e.target.files[0])
                }

            } />
            <button className="bg-green-500 w-[200px] h-[50px] rounded-xl text-white cursor-pointer" onClick={handleUpload}>Upload</button>
        </div>


    )
}
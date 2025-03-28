import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6"
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function AdminPage() {
    return(
        <div className="w-full h-screen bg-gray-200 flex p-2">
            <div className="w-[300px] h-full ">
                <Link to="/admin/users" className=" p-2 flex items-center"><FaUsers className="mr-2" />Users</Link>
                <Link to="/admin/products" className=" p-2 flex items-center"><FaWarehouse className="mr-2" />Products</Link>
                <Link to="/admin/orders" className=" p-2 flex items-center"><FaFileInvoiceDollar className="mr-2"/>Orders</Link>
                <Link to="/admin/settings" className=" p-2 flex items-center"><IoSettings className="mr-2" />Settings</Link>

                </div>
            <div className="h-full w-[calc(100vw-300px)] bg-white rounded-lg">
            <Routes path="/*">
                <Route path='/products' element={<h1>Products</h1>}/>
                <Route path='/orders' element={<h1>Orders</h1>}/>
                <Route path='/users' element={<h1>Users</h1>}/>
                <Route path='/settings' element={<h1>Settings</h1>}/>
                <Route path='*' element={<h1>ERROR 404 NOT FOUNDED </h1>}/>


            </Routes>
            </div>
        </div>
    )

}
export default function LoginPage() {
    return (
        <div className="w-full h-screen bg-[url(/bg-login.jpg)] bg-cover bg-center flex ">
            <div className=" w-[50%] h-full">

            </div>
            <div className=" w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px]  backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center flex-col ">
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="Email"/>
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="password" placeholder="Password"/>
                    <button className="w-[400px] h-[50px] bg-green-500 rounded-xl text-white cursor-pointer">Login</button>

                </div>

            </div>

        </div>
    )
}
import React from "react";
import ApplicationLogo from '../ApplicationLogo';

const Login = () => {
    return (
        <div>
            <div className="container grow bg-[#E3F2FD] sm:grid-cols-1 h-screen">
                <div className="py-14">
                    <div className="m-auto card w-[500px] h-auto bg-white border border-sky-200">
                        <ApplicationLogo className="h-10 block mt-4"/>
                        <div className="card-body">
                            <div className="card-title">
                                <p className="text-[#6b44ae] text-center text-2xl font-bold">Hi, Welcome Back</p>
                            </div>
                            <p className="text-[#9E9E9E] text-center font-medium mt-3">Enter your credentials to continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
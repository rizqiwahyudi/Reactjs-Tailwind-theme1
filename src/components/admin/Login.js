import React from "react";
import ApplicationLogo from '../ApplicationLogo';

const Login = () => {
    return (
        <div>
            <div className="container grow bg-[#E3F2FD] sm:grid-cols-1 h-screen">
                <div className="py-14">
                    <div className="m-auto card lg:w-[500px] w-[320px] h-auto bg-white border border-sky-200">
                        <ApplicationLogo className="h-10 block mt-4"/>
                        <div className="card-body">
                            <div className="card-title">
                                <p className="text-[#6b44ae] text-center text-2xl font-bold">Hi, Welcome Back</p>
                            </div>
                            <p className="text-[#9E9E9E] text-center font-medium mt-3">Enter your credentials to continue</p>

                            <button className="btn btn-md rounded-md mt-3 bg-[#F5F5F5] border-none hover:bg-[#F6FBFF] hover:ring-sky-500 hover:ring-1">
                                <p className="text-[#616161] capitalize font-semibold text-base">
                                    <img src="https://berrydashboard.io/free/static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg" className="inline mr-4 h-[16px] w-[16px] mb-1" alt="Google Logo"/>
                                    Sign In With Google
                                </p>
                            </button>

                            <div className="mt-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <hr className="text-black"/>
                                    <button className="btn btn-sm rounded-lg btn-disabled btn-outline bg-white">
                                        <p className="text-black">or</p>
                                    </button>
                                    <hr className="text-black"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
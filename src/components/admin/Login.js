import React from "react";
import ApplicationLogo from '../ApplicationLogo';
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div>
            <div className="container grow bg-[#E3F2FD] sm:grid-cols-1 h-auto">
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

                            <div className="mt-10 mb-4">
                                <div className="divider">
                                    <button className="btn btn-sm w-32 rounded-xl btn-disabled btn-outline bg-white">
                                        <p className="text-black">or</p>
                                    </button>
                                </div>
                            </div>

                            <p className="text-black text-center font-semibold text-sm">Sign in with Email address</p>

                            <form action="" className="mt-4">
                                <div className="form-control mb-5">
                                    <input type="text" className="input bg-[#FAFAFA] h-[50px] border border-slate-300 hover:border-slate-600 focus:border-sky-600 focus:border-2 focus:outline-none text-black" placeholder="Email Address / Username"/>
                                </div>
                                <div className="form-control">
                                    <div className="group input-group-lg relative">
                                        <input type={showPassword ? "text" : "password"} className="input bg-[#FAFAFA] h-[50px] w-[100%] border border-slate-300 group-hover:border-slate-600 focus:group-hover:border-sky-600 focus:border-sky-600 focus:border-2 focus:outline-none text-black" placeholder="Password"/>
                                        <button type="button" className="btn btn-sm absolute btn-ghost left-[380px] mt-2 hover:bg-[#F0F0F0] rounded-full" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? 
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                                    </svg>                                              
                                                :
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clip-rule="evenodd" />
                                                        <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                                                    </svg>                                              
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-sm border-slate-400 border-2"/>
                                            <span className="label-text text-slate-600">Remember me</span>
                                        </label>
                                    </div>

                                    <div className="col-span-2">
                                        <Link to="" className="float-right text-[#754CBD] font-semibold">Forgot Password?</Link>
                                    </div>
                                </div>

                                <div className="form-control mt-4">
                                    <button className="btn bg-[#673AB7] text-white hover:bg-[#5E35B1] rounded-md">
                                        sign in
                                    </button>
                                </div>

                                <hr className="my-4"/>

                                <div className="text-center">
                                    <Link to="/register" className="btn btn-ghost btn-sm hover:bg-transparent normal-case text-black">
                                        Don't have an account?
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <footer className="footer p-6">
                    <span className="text-sm text-slate-400">Nesiatek</span>
                    <span className="text-sm text-slate-400 text-right">asdasd</span>
                </footer>
            </div>
        </div>
    )
}

export default Login;
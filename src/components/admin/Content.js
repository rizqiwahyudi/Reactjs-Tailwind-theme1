import React from "react";

const Content = () => {
    return (
        <div>
            <div className="container mx-auto px-5 py-5">
                {/* <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-row">
                        <div className="card w-80 h-44 glass bg-[#5e35b1] shadow-md transition transform hover:bg-[#5e35b1] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <div className="m-4 text-right">
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h2 className="text-white">$500.00</h2>
                                    <p className="text-sm">Total Earning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="card w-96 glass bg-[#5e35b1] shadow-md transition transform hover:bg-[#5e35b1] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <div className="card-body">
                                <div className="">

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="grid lg:grid-cols-3 grid-rows-3 gap-4 mt-4">
                    <div className="flex flex-row">
                        <div className="card w-96 h-[180px] bg-[#5E35B1] shadow-xl">
                            <div className="card-body">
                                <div class="grid grid-cols-2">
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#512EA9] after:absolute
                                    after:left-[220px] after:top-[-70px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#4527A0] after:absolute
                                    after:left-[280px] after:top-[-70px]"></div>
                                    <div> 
                                        <button className="btn btn-sm bg-[#4527A0] h-[40px] border-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button className="btn btn-sm bg-[#5E35B1] float-right border-none z-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <h2 className="font-money text-[38px] font-bold text-white">$500.00</h2>
                                <h4 className="text-slate-400 font-medium text-[20px] mt-[-10px]">Total Earning</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-row">
                        <div className="card w-96 h-[180px] bg-[#1E88E5] shadow-xl">
                            <div className="card-body">
                                <div class="grid grid-cols-2">
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#1976D3] after:absolute
                                    after:left-[220px] after:top-[-70px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#1565C0] after:absolute
                                    after:left-[280px] after:top-[-70px]"></div>
                                    <div> 
                                        <button className="btn btn-sm bg-[#1565C0] h-[40px] border-none z-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button className="btn btn-sm bg-[#5E35B1] float-right border-none z-40">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <h2 className="font-money text-[38px] font-bold text-white">$500.00</h2>
                                <h4 className="text-slate-400 font-medium text-[20px] mt-[-10px]">Total Earning</h4>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-rows-2">
                        <div className="card w-96 h-[80px] bg-[#1E88E5] shadow-xl">
                            <div className="card-body">
                                <div class="grid grid-cols-2">
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#1976D3] after:absolute
                                    after:left-[220px] after:top-[-70px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#1565C0] after:absolute
                                    after:left-[280px] after:top-[-70px]"></div>
                                    <div> 
                                        <button className="btn btn-sm bg-[#1565C0] h-[40px] border-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button className="btn btn-sm bg-[#5E35B1] float-right border-none z-40">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <h2 className="font-money text-[38px] font-bold text-white">$500.00</h2>
                                <h4 className="text-slate-400 font-medium text-[20px] mt-[-10px]">Total Earning</h4>
                            </div>
                        </div>

                        <div className="card w-96 h-[80px] bg-[#c2df41] shadow-xl">
                            <div className="grid grid-cols-4">
                                <div className="h-20 content-center"> 
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#1976D3] after:absolute
                                    after:left-[220px] after:top-[-70px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#1565C0] after:absolute
                                    after:left-[280px] after:top-[-70px]"></div>
                                    <button className="top-[50px] btn btn-sm bg-[#1565C0] h-[40px] border-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="col-span-3 h-20 content-center"><h4 className="text-slate-400 font-medium text-[20px] mt-[-10px]">Total Earning</h4></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Content;
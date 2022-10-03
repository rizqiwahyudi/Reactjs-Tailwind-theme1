import React from "react";
import Chart from "react-apexcharts";

const Content = () => {
    const series = [
        {
            name: "profit",
            data: [43, 53, 50, 57, 87, 100, 23, 122, 23, 45, 234]
        }
    ];

    const options = {
        chart: {
            locales: [{
                "name": "id",
                "options": {
                  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                  "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  "toolbar": {
                      "exportToSVG": "Download SVG",
                      "exportToPNG": "Download PNG",
                      "menu": "Menu",
                      "selection": "Selection",
                      "selectionZoom": "Selection Zoom",
                      "zoomIn": "Zoom In",
                      "zoomOut": "Zoom Out",
                      "pan": "Panning",
                      "reset": "Reset Zoom"
                  }
                }
            }],
            defaultLocale: "id"
        },
        xaxis: {
            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
        }
    };

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

                <div className="grid lg:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-row">
                        <div className="card w-96 h-[180px] bg-[#5E35B1] shadow-xl">
                            <div className="card-body">
                                <div class="grid grid-cols-2 relative">
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#512EA9] after:absolute
                                    after:left-[160px] after:top-[-110px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#4527A0] after:absolute
                                    after:left-[230px] after:top-[-100px]"></div>
                                    <div> 
                                        <button className="btn btn-sm bg-[#4527A0] h-[40px] border-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button className="btn btn-sm bg-[#5E35B1] float-right border-none absolute left-[200px]">
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
                                        <button className="btn btn-sm bg-[#1E88E5] float-right border-none absolute left-[235px]">
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

                    <div className="flex flex-col">
                        <div className="card w-90 h-[80px] bg-[#1E88E5] shadow-xl mb-4">
                            <div className="card-body">
                                <div class="grid grid-cols-2">
                                    {/* <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#1976D3] after:absolute
                                    after:left-[220px] after:top-[-70px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#1565C0] after:absolute
                                    after:left-[280px] after:top-[-70px]"></div> */}
                                    <div className=""> 
                                        <button className="btn btn-sm bg-[#1565C0] h-[40px] border-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
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

                        <div className="card w-90 h-[80px] bg-[#c2df41] shadow-xl">
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

                <div className="grid lg:grid-cols-3 gap-4 mt-4">
                        <div className="card w-[640px] h-auto bg-white shadow-xl">
                            <div className="card-body">
                                <div class="grid grid-cols-2 relative">
                                    <div> 
                                        <p className="text-slate-400 text-sm mt-[-10px]">Total Growth</p>
                                        <h2 className="font-money text-[20px] font-bold text-black">$500.00</h2>
                                    </div>
                                    <div className="">
                                        <select name="" id="" className="w-30 border focus:ring-2 float-right">
                                            <option value="">Today</option>
                                            <option value="">This Month</option>
                                            <option value="">This Year</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mx-auto">
                                    <Chart options={options} series={series} type="bar" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            
        </div>
    )
}

export default Content;
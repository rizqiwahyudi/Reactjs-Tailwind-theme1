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
            defaultLocale: "id",
        },
        xaxis: {
            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
        },
        stroke: {
            curve: 'smooth'
        },
    };

    return (
        <div>
            <div className="mx-auto px-5 py-5">
                <div className="grid lg:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-row">
                        <div className="card lg:w-96 w-80 h-[180px] bg-[#5E35B1] shadow-xl">
                            <div className="card-body">
                                <div class="grid grid-cols-2 relative">
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#512EA9] after:absolute
                                    after:left-[160px] after:top-[-110px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#4527A0] after:absolute
                                    after:left-[230px] after:top-[-100px]"></div>
                                    <div> 
                                        <button className="btn btn-sm bg-[#4527A0] h-[40px] border-none text-white">
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
                        <div className="card lg:w-96 w-80 h-[180px] bg-[#1E88E5] shadow-xl">
                            <div className="card-body">
                                <div class="grid grid-cols-2">
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#1976D3] after:absolute
                                    after:left-[220px] after:top-[-70px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#1565C0] after:absolute
                                    after:left-[280px] after:top-[-70px]"></div>
                                    <div> 
                                        <button className="btn btn-sm bg-[#1565C0] h-[40px] border-none z-50 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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
                                <h4 className="text-slate-400 font-medium text-[20px] mt-[-10px]">Total Order</h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="card w-90 h-[80px] bg-[#1E88E5] shadow-xl mb-4">
                            {/* <div className="card-body"> */}
                                <div class="flex flex-row">
                                    <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-[#3394E9] after:absolute
                                    after:left-[230px] after:top-[-120px]"></div>
                                    <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-[#3394E9] after:absolute
                                    after:left-[280px] after:top-[-30px] after:opacity-70"></div>
                                    <div className="ml-4 mt-4"> 
                                        <button className="btn btn-sm bg-[#1565C0] border-none h-[45px] text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="flex-col ml-3 mt-4">
                                        <h2 className="text-white font-bold mb-1">$203k</h2>
                                        <h4 className="text-white text-xs">Total Income</h4>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>

                        <div className="card w-90 h-[80px] bg-white shadow-xl">
                            {/* <div className="card-body"> */}
                                <div className="flex flex-row">
                                    <div className="h-20 content-center"> 
                                        <div className="after:h-[160px] after:w-[160px] after:rounded-full after:bg-gradient-to-r after:from-[#FFF1C6] after:absolute
                                        after:left-[220px] after:top-[-120px]"></div>
                                        <div className="after:h-[190px] after:w-[190px] after:rounded-full after:bg-gradient-to-br after:from-[#FFF1C6] after:absolute
                                        after:left-[280px] after:top-[-30px] after:opacity-70"></div>
                                        <div className="ml-4 mt-4">
                                            <button className="btn btn-sm bg-[#FFF8E1] border-none h-[45px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#FFC107]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex-col ml-3 mt-4">
                                        <h2 className="text-black font-bold mb-1">$203k</h2>
                                        <h4 className="text-slate-400 text-xs">Total Income</h4>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-4 mt-4">
                    {/* <div className="flex flex-row gap-4 mt-4"> */}
                        <div className="card w-auto bg-white shadow-xl lg:col-span-2">
                            <div className="card-body">
                                <div class="grid grid-cols-2 relative">
                                    <div> 
                                        <p className="text-slate-400 text-sm mt-[-10px]">Total Growth</p>
                                        <h2 className="font-money text-[20px] font-bold text-black">$500.00</h2>
                                    </div>
                                    <div className="">
                                        <select name="" id="" className="select w-36 border bg-[#FAFAFA] text-black focus:ring-2 float-right">
                                            <option value="" selected>Today</option>
                                            <option value="">This Month</option>
                                            <option value="">This Year</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mx-auto w-auto">
                                    <Chart options={options} series={series} type="bar" className="lg:w-[500px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:w-auto bg-white shadow-xl">
                            <div className="card-body">
                                <div className="grid grid-cols-2 relative mb-2">
                                    <div>
                                        <p className="text-black font-bold mt-[-10px]">Popular Stocks</p>
                                    </div>
                                    <div>
                                        <button className="float-right mt-[-5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-sky-300">
                                                <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="card card-compact w-auto bg-[#EDE7F6]">
                                    <div className="flex flex-row">
                                        <div className="ml-4 mt-4">
                                            <span className="text-[#5E35B1] font-semibold text-sm">Bajaj Finery</span>
                                        </div>
                                        <div className="ml-14 mt-4">
                                            <h4 className="text-[#424242] font-bold text-lg text-right">$1839.00</h4>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-black font-normal text-xs ml-4">10% Profit</span>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <div className="">
                                            <Chart options={options} series={series} type="area" height="180px" className="lg:w-[240px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-14">
                                    <div className="flex flex-col mb-2">
                                        <span className="text-[#616161] font-semibold text-sm mb-1">Bajaj Finery</span>
                                        <span className="text-[#48D783] font-semibold text-xs">10% Profit</span>
                                    </div>
                                    <div className="flex flex-row mb-2">
                                        <h4 className="text-[#616161] font-semibold text-md">$1839.00</h4>
                                        <span className="badge bg-green-200 ml-2 mt-[7px] badge-xs rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-[#616161] font-semibold text-sm mb-1">TTML</span>
                                        <span className="text-red-500 font-semibold text-xs">10% Profit</span>
                                    </div>
                                    <div className="flex flex-row mb-2">
                                        <h4 className="text-[#616161] font-semibold text-md">$1839.00</h4>
                                        <span className="badge bg-red-200 ml-2 mt-[7px] badge-xs rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-[#616161] font-semibold text-sm mb-1">Bajaj Finery</span>
                                        <span className="text-[#48D783] font-semibold text-xs">10% Profit</span>
                                    </div>
                                    <div className="flex flex-row mb-2">
                                        <h4 className="text-[#616161] font-semibold text-md">$1839.00</h4>
                                        <span className="badge bg-green-200 ml-2 mt-[7px] badge-xs rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-[#616161] font-semibold text-sm mb-1">Bajaj Finery</span>
                                        <span className="text-[#48D783] font-semibold text-xs">10% Profit</span>
                                    </div>
                                    <div className="flex flex-row mb-2">
                                        <h4 className="text-[#616161] font-semibold text-md">$1839.00</h4>
                                        <span className="badge bg-green-200 ml-2 mt-[7px] badge-xs rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="items-center text-center col-span-2 mt-1">
                                        <button className="btn btn-sm bg-transparent hover:bg-[#F6FBFF] border-none">
                                            <span className="text-[#2196F3] text-sm font-semibold">View All</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-[#2196F3]">
                                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Content;
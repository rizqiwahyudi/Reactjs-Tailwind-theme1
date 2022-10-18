/*eslint-disable*/
import React from "react";
import { Outlet, Link } from "react-router-dom";
import ApplicationLogo from '../ApplicationLogo';
// import Content from "./Content";

export default function Navbar(props) {
  const [showNavbar, setNavbarOpen] = React.useState(true);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Content/>,
  //   },
  // ]);
  
  return (
    <>
      <div className="navbar bg-white flex">
        <div className="navbar-start flex-none grid grid-cols-2 gap-4 w-[240px]">
          {/* App Logo */}
          <ApplicationLogo className="block h-7 w-auto text-purple-600 mt-3 ml-3 place-self-start"/>

           {/* Mobile Menu Button */}
          <div className="dropdown place-self-end">
            <label tabIndex={0} className="btn btn-ghost btn-square rounded-xl bg-[#EDE7F6] hover:bg-[#5e35b1] btn-sm"  onClick={() => setNavbarOpen(!showNavbar)}>
              <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            </label>
            {/* Mobile Main Menu */}
            <ul tabIndex={0} className={"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" + (showNavbar ? " hidden" : " lg:hidden block")}>
              <li><a href="/">Homepage</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center grow">
          <div className="form-control ml-4 py-2">
            <div className="input-group lg:flex hidden">
              <input type="text" placeholder="Search…" className="w-[300px] input input-bordered bg-white placeholder:contrast-less focus:ring-2 focus:ring-sky-400" />
              <button className="btn btn-square bg-[#EDE7F6] hover:bg-[#5e35b1]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-end flex-none place-content-end">
          <button className="btn btn-ghost btn-square rounded-lg bg-[#EDE7F6] hover:bg-[#5e35b1] group">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item group-hover:bg-violet-300"></span>
            </div>
          </button>

          <div className="dropdown">
            <label tabIndex={0} className="btn hover:bg-[#2196f3] btn-ghost m-1 gap-3 rounded-3xl bg-sky-100 group">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span className="text-xs">AA</span>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-cyan-500 group-hover:stroke-cyan-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </label>
            
            <div tabIndex={0} className="mt-2 right-[0px] dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-500">
              <div className="card-body">
                <h5 className="text-lg text-gray-800">Adam Endvy</h5>
                <p>Project Admin.</p>
    
                <div className="card card-compact bg-yellow-100 after:w-[160px] after:h-[160px] 
                after:rounded-full after:border-solid after:border-yellow-200 after:border-[14px] after:absolute after:top-[40px] after:left-[160px]">
                  <div className="card-body">
                    <h2 className="text-sm text-gray-900 font-bold">Upgrade your plan</h2>
                    <p className="text-xs">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start after:w-[200px] after:h-[200px] 
                after:rounded-full after:border-solid after:border-amber-200 after:border-[4px] after:absolute after:top-[100px] after:left-[100px]">
                      <button className="btn btn-ghost bg-yellow-300 btn-sm font-bold text-gray-900">Go Premium</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-auto bg-white">
        {/* Navigation */}
        <div className={"h-auto flex-none " + (showNavbar ? " w-[260px] translate-x-0 ease-in duration-500 lg:block hidden " : " w-[0px] translate-x-[-250px] ease-out duration-500 ")} >
            <ul className="menu p-5">
            <p className="text-black ml-2 font-semibold text-sm mb-2">Dashboard</p>
              <li className="hover:text-[#5e35b1] hover:bg-[#EDE7F6] rounded-xl">
                <a href="/" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Dashboard
                </a>
              </li>
              <hr className="my-4"></hr>
              <p className="text-black ml-2 font-semibold text-sm">Pages</p>
              <span className="text-xs text-slate-400 ml-2 font-semibold mt-1 mb-2">Pages Caption</span>
              <div className="collapse collapse-arrow group w-auto">
                <input type="checkbox" className="peer"/>
                <li className="collapse-title group-hover:text-[#5e35b1] group-hover:bg-[#EDE7F6] peer-checked:text-[#5e35b1] peer-checked:bg-[#EDE7F6] rounded-xl">
                  <a className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                    <span>Authentication</span>
                  </a>
                </li>
                <div className="collapse-content ml-8">
                  <li>
                    <a href="/login" target="_blank" className="hover:bg-transparent hover:text-[#5E35B1] focus:text-[#5E35B1] focus:bg-transparent">Login</a>
                  </li>
                  <li>
                    <a href="/register" target="_blank" className="hover:bg-transparent hover:text-[#5E35B1] focus:text-[#5E35B1] focus:bg-transparent">Register</a>
                  </li>
                </div>
              </div>
              <li className="hover:text-[#5e35b1] hover:bg-[#EDE7F6] rounded-xl">
                <a href="/crud">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                  </svg>
                  <span>Sample CRUD Table</span>
                </a>
              </li>
              <hr className="my-4"></hr>
              <p className="text-black ml-2 font-semibold text-sm mb-2">Utilities</p>
              <li className="hover:text-[#5e35b1] hover:bg-[#EDE7F6] rounded-xl">
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  Item 3
                </a>
              </li>
            </ul>
        </div>

        {/* Content */}
        <div className="container grow bg-[#e3f2fd] rounded-tl-xl sm:grid-cols-1">
          <Outlet />
        </div>
      </div>

    </>
  );
}

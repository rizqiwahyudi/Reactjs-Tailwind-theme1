import React from "react";
import "../../flaro-assets/css/style.css";

const LandingPage = () => {
    // Burger menus
    document.addEventListener('DOMContentLoaded', function() {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });

    return (
        <div>
            <div className="container grow sm:grid-cols-1 h-auto">
            <section className="bg-blueGray-50">
                <div className="container mx-auto overflow-hidden">
                <div className="flex items-center justify-between px-4 py-5 bg-blueGray-50">
                    <div className="w-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-auto mr-14">
                        <a href="#">
                            <img src={require('../../flaro-assets/logos/logo-new.svg').default} alt="" className="w-10 h-10 inline mr-2"/>
                            <span className="text-black font-extrabold text-xl">Nesiatek</span>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="w-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-auto hidden lg:block">
                        <ul className="flex items-center mr-16">
                            <li className="mr-9 font-medium hover:text-gray-700 text-black"><a href="#">Features</a></li>
                            <li className="mr-9 font-medium hover:text-gray-700 text-black"><a href="#">Solutions</a></li>
                            <li className="mr-9 font-medium hover:text-gray-700 text-black"><a href="#">Resources</a></li>
                            <li className="font-medium hover:text-gray-700 text-black"><a href="#">Pricing</a></li>
                        </ul>
                        </div>
                        <div className="w-auto hidden lg:block">
                        <div className="inline-block">
                            <button className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Try 14 Days Free Trial</button>
                        </div>
                        </div>
                        <div className="w-auto lg:hidden">
                        <a href="#">
                            <svg className="navbar-burger text-indigo-600" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                            <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                    <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                    <div className="flex flex-wrap justify-between h-full">
                        <div className="w-full">
                        <div className="flex items-center justify-between -m-2">
                            <div className="w-auto p-2">
                            <a className="inline-block" href="#">
                                <img src={require('../../flaro-assets/logos/logo-new.svg').default} alt="" className="w-6 h-6 inline mr-2"/>
                                <span className="text-black font-extrabold text-lg">Nesiatek</span>
                            </a>
                            </div>
                            <div className="w-auto p-2">
                            <a className="navbar-burger" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col justify-center py-16 w-full">
                        <ul>
                            <li className="mb-12"><a className="font-medium hover:text-gray-700 text-black" href="#">Features</a></li>
                            <li className="mb-12"><a className="font-medium hover:text-gray-700 text-black" href="#">Solutions</a></li>
                            <li className="mb-12"><a className="font-medium hover:text-gray-700 text-black" href="#">Resources</a></li>
                            <li><a className="font-medium hover:text-gray-700 text-black" href="#">Pricing</a></li>
                        </ul>
                        </div>
                        <div className="flex flex-col justify-end w-full pb-8">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                            <div className="block">
                                <button className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Try 14 Days Free Trial</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
                </div>
                <div className="overflow-hidden pt-16">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
                        <div className="flex flex-wrap items-center -m-1">
                            <div className="w-auto p-1"><a className="text-sm" href="">👋 We are hiring! View open roles</a></div>
                            <div className="w-auto p-1">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            </div>
                        </div>
                        </div>
                        <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none text-black">The new, simple, and lightweight web templates</h1>
                        <p className="mb-11 text-lg text-black font-medium md:max-w-md">We provides you with web templates and graphic design services, helping you to build a successful website in less time.</p>
                        <div className="flex flex-wrap -m-2.5 mb-20">
                        <div className="w-full md:w-auto p-2.5">
                            <div className="block">
                            <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Join Free for 30 Days</button>
                            </div>
                        </div>
                        <div className="w-full md:w-auto p-2.5">
                            <div className="block">
                            <button className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200" type="button">
                                <div className="flex flex-wrap justify-center items-center -m-1">
                                <div className="w-auto p-1">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div className="w-auto p-1 text-black">
                                    <span>Book a call</span>
                                </div>
                                </div>
                            </button>
                            </div>
                        </div>
                        </div>
                        <p className="mb-6 text-sm text-gray-500 font-semibold uppercase">Trusted and loved by 100+ tech first teams</p>
                        <div className="flex flex-wrap -m-3">
                        <div className="w-auto p-3">
                            <img src={require('../../flaro-assets/logos/brands/brand.png')} alt=""/>
                        </div>
                        <div className="w-auto p-3">
                            <img src={require('../../flaro-assets/logos/brands/brand2.png')} alt=""/>
                        </div>
                        <div className="w-auto p-3">
                            <img src={require('../../flaro-assets/logos/brands/brand3.png')} alt=""/>
                        </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        {/* <img className="transform hover:-translate-y-16 transition ease-in-out duration-1000" src={require('../../flaro-assets/images/headers/header.png')} alt=""/> */}
                        <img className="transform hover:-translate-y-16 transition ease-in-out duration-1000 mb-4" src={require('../../flaro-assets/images/headers/Hero-img2.svg').default} alt=""/>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="pt-24 pb-40 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                <h2 className="mb-20 text-6xl md:text-8xl xl:text-10xl font-bold font-heading text-center tracking-px-n leading-none text-black">Showcase your software</h2>
                <div className="flex flex-wrap -m-16 md:-m-3">
                    <div className="w-full md:w-1/3 p-16 md:p-3">
                    <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl">
                        <h3 className="mb-3 text-xl font-bold font-heading leading-normal text-black">eCommerce Templates</h3>
                        <p className="mb-10 text-gray-600 font-medium leading-relaxed">Thousands of eCommerce web templates</p>
                        <img className="mx-auto h-72 object-fill rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000 bg-[#F8FAFC]" src={require('../../flaro-assets/images/features/ecommerce.svg').default} alt=""/>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-16 md:p-3">
                    <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl">
                        <h3 className="mb-3 text-xl font-bold font-heading leading-normal text-black">Blog Templates</h3>
                        <p className="mb-10 text-gray-600 font-medium leading-relaxed">Over 1,500 blog templates</p>
                        <img className="mx-auto h-72 object-fill rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000 bg-[#F8FAFC]" src={require('../../flaro-assets/images/features/blog.svg').default} alt=""/>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-16 md:p-3">
                    <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl">
                        <h3 className="mb-3 text-xl font-bold font-heading leading-normal text-black">Portofolio Templates</h3>
                        <p className="mb-10 text-gray-600 font-medium leading-relaxed">Beautiful portofolio web templates</p>
                        <img className="mx-auto h-72 object-fill rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000 bg-[#F8FAFC]" src={require('../../flaro-assets/images/features/portofolio.svg').default} alt=""/>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="pt-24 pb-28 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                <h2 className="mb-5 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">How Nesiatek Works</h2>
                <p className="mb-20 text-lg text-gray-900 text-center font-medium md:max-w-lg mx-auto">We can help you to improve your productivity by using our products.</p>
                <div className="flex flex-wrap -m-8">
                    <div className="w-full md:w-1/3 p-8">
                    <div className="relative text-center">
                        <img className="absolute -right-40 top-8" src={require('../../flaro-assets/images/how-it-works/line4.svg').default} alt=""/>
                        <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5391 21L15.5391 15M17.5391 10C17.5391 13.866 14.4051 17 10.5391 17C6.67307 17 3.53906 13.866 3.53906 10C3.53906 6.13401 6.67307 3 10.5391 3C14.4051 3 17.5391 6.13401 17.5391 10Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        </div>
                        <div className="md:max-w-xs mx-auto">
                        <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal text-black">Choose Product</h3>
                        <p className="font-sans text-gray-600">Choose our best product, of course we provide the best.</p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-8">
                    <div className="relative text-center">
                        <img className="absolute -right-40 top-8" src={require('../../flaro-assets/images/how-it-works/line4.svg').default} alt=""/>
                        <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-600 rounded-full">
                        <img className="absolute top-0 left-0" src={require('../../flaro-assets/images/how-it-works/gradient.svg').default} alt=""/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 14V20M14 17H20M6 10H8C9.10457 10 10 9.10457 10 8V6C10 4.89543 9.10457 4 8 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10ZM16 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4H16C14.8954 4 14 4.89543 14 6V8C14 9.10457 14.8954 10 16 10ZM6 20H8C9.10457 20 10 19.1046 10 18V16C10 14.8954 9.10457 14 8 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        </div>
                        <div className="md:max-w-xs mx-auto">
                        <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal text-black">Make Secure Payment</h3>
                        <p className="font-sans text-gray-600">Lorem ipsum dolor sit amet, consec tetur adipiscing elit volutpat.</p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-8">
                    <div className="text-center">
                        <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4609 11C11.9087 11 11.4609 11.4477 11.4609 12C11.4609 12.5523 11.9087 13 12.4609 13V11ZM15.4609 13C16.0132 13 16.4609 12.5523 16.4609 12C16.4609 11.4477 16.0132 11 15.4609 11V13ZM12.4609 15C11.9087 15 11.4609 15.4477 11.4609 16C11.4609 16.5523 11.9087 17 12.4609 17V15ZM15.4609 17C16.0132 17 16.4609 16.5523 16.4609 16C16.4609 15.4477 16.0132 15 15.4609 15V17ZM9.46094 11C8.90865 11 8.46094 11.4477 8.46094 12C8.46094 12.5523 8.90865 13 9.46094 13V11ZM9.47094 13C10.0232 13 10.4709 12.5523 10.4709 12C10.4709 11.4477 10.0232 11 9.47094 11V13ZM9.46094 15C8.90865 15 8.46094 15.4477 8.46094 16C8.46094 16.5523 8.90865 17 9.46094 17V15ZM9.47094 17C10.0232 17 10.4709 16.5523 10.4709 16C10.4709 15.4477 10.0232 15 9.47094 15V17ZM18.4609 7V19H20.4609V7H18.4609ZM17.4609 20H7.46094V22H17.4609V20ZM6.46094 19V7H4.46094V19H6.46094ZM7.46094 6H9.46094V4H7.46094V6ZM15.4609 6H17.4609V4H15.4609V6ZM7.46094 20C6.90865 20 6.46094 19.5523 6.46094 19H4.46094C4.46094 20.6569 5.80408 22 7.46094 22V20ZM18.4609 19C18.4609 19.5523 18.0132 20 17.4609 20V22C19.1178 22 20.4609 20.6569 20.4609 19H18.4609ZM20.4609 7C20.4609 5.34315 19.1178 4 17.4609 4V6C18.0132 6 18.4609 6.44772 18.4609 7H20.4609ZM6.46094 7C6.46094 6.44772 6.90865 6 7.46094 6V4C5.80408 4 4.46094 5.34315 4.46094 7H6.46094ZM12.4609 13H15.4609V11H12.4609V13ZM12.4609 17H15.4609V15H12.4609V17ZM11.4609 4H13.4609V2H11.4609V4ZM13.4609 6H11.4609V8H13.4609V6ZM11.4609 6C10.9087 6 10.4609 5.55228 10.4609 5H8.46094C8.46094 6.65685 9.80408 8 11.4609 8V6ZM14.4609 5C14.4609 5.55228 14.0132 6 13.4609 6V8C15.1178 8 16.4609 6.65685 16.4609 5H14.4609ZM13.4609 4C14.0132 4 14.4609 4.44772 14.4609 5H16.4609C16.4609 3.34315 15.1178 2 13.4609 2V4ZM11.4609 2C9.80408 2 8.46094 3.34315 8.46094 5H10.4609C10.4609 4.44772 10.9087 4 11.4609 4V2ZM9.46094 13H9.47094V11H9.46094V13ZM9.46094 17H9.47094V15H9.46094V17Z" fill="#111827"></path>
                            </svg>
                        </div>
                        </div>
                        <div className="md:max-w-xs mx-auto">
                        <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal text-black">Get The Product</h3>
                        <p className="font-sans text-gray-600">Lorem ipsum dolor sit amet, consec tetur adipiscing elit volutpat.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="pt-24 bg-blueGray-50 overflow-hidden pb-20">
                <div className="container px-4 mx-auto">
                <h2 className="mb-6 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none text-black">Get your design right!</h2>
                <div className="mb-16 flex flex-wrap justify-between -m-4">
                    <div className="w-auto p-4">
                    <div className="md:max-w-md">
                        <p className="text-lg text-gray-900 font-medium leading-relaxed">Also you can subscribe or switch to premium for more access to our products.</p>
                    </div>
                    </div>
                    <div className="w-auto p-4">
                    <div className="inline-flex items-center max-w-max">
                        <p className="text-gray-600 font-medium leading-relaxed">Monthly</p>
                        <a className="mx-3" href="#">
                        <div className="p-0.5 w-9 h-5 bg-indigo-600 rounded-full">
                            <div className="relative">
                            <div className="absolute right-0 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        </a>
                        <p className="text-gray-600 font-medium leading-relaxed">
                        <span>Yearly</span>
                        <span className="text-indigo-600 font-semibold"> (Save 25%)</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="overflow-hidden border border-blueGray-200 rounded-3xl">
                    <div className="flex flex-wrap divide-y md:divide-x lg:divide-y-0 divide-blueGray-200">
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90" style={{backdropFilter : 'blur(46px)'}}>
                        <span className="mb-3 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">Free</span>
                        <p className="mb-6 text-gray-500 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Egestas lacus, blan dit pellentesque.</p>
                        <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-tight">
                            <span>$0</span>
                            <span className="text-gray-400">/mo</span>
                        </h3>
                        <p className="mb-8 text-sm text-gray-500 font-medium leading-relaxed">No credit card required</p>
                        <button className="mb-9 py-4 px-9 w-full font-medium border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200 text-black" type="button">Get Started Now</button>
                        <ul>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">3 Team Members</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="text-blueGray-400 font-semibold leading-normal">Individual Email Account</p>
                            </li>
                            <li className="flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="text-blueGray-400 font-semibold leading-normal">Premium Support</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90" style={{backdropFilter : 'blur(46px)'}}>
                        <img className="absolute z-10 top-0 left-0" src={require('../../flaro-assets/images/pricing/gradient5.svg').default} alt=""/>
                        <div className="relative z-10">
                            <span className="mb-3 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">Basic</span>
                            <p className="mb-6 text-gray-500 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Egestas lacus, blan dit pellentesque.</p>
                            <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-tight">
                            <span>$19</span>
                            <span className="text-gray-400">/mo</span>
                            </h3>
                            <p className="mb-8 text-sm text-gray-500 font-medium leading-relaxed">Billed Yearly</p>
                            <button className="mb-9 py-4 px-9 w-full font-medium border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200 text-black" type="button">Get Started Now</button>
                            <ul>
                            <li className="mb-4 flex items-center">
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <p className="font-semibold leading-normal">3 Team Members</p>
                            </li>
                            <li className="mb-4 flex items-center">
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                            </li>
                            <li className="mb-4 flex items-center">
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                            </li>
                            <li className="mb-4 flex items-center">
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <p className="font-semibold leading-normal">Individual Email Account</p>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <p className="font-semibold leading-normal">Premium Support</p>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90" style={{backdropFilter : 'blur(46px)'}}>
                        <span className="mb-3 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">Pro</span>
                        <p className="mb-6 text-gray-500 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Egestas lacus, blan dit pellentesque.</p>
                        <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-tight">
                            <span>$99</span>
                            <span className="text-gray-400">/mo</span>
                        </h3>
                        <p className="mb-8 text-sm text-gray-500 font-medium leading-relaxed">Billed Yearly</p>
                        <button className="mb-9 py-4 px-9 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Get Started Now</button>
                        <ul>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">3 Team Members</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">Individual Email Account</p>
                            </li>
                            <li className="flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">Premium Support</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90" style={{backdropFilter : 'blur(46px)'}}>
                        <span className="mb-3 inline-block text-sm text-indigo-600 font-semibold uppercase tracking-px leading-snug">Enterprise</span>
                        <p className="mb-6 text-gray-500 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Egestas lacus, blan dit pellentesque.</p>
                        <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-tight">Contact us</h3>
                        <p className="mb-8 text-sm text-gray-500 font-medium leading-relaxed">for custom offer</p>
                        <button className="mb-9 py-4 px-9 w-full font-medium border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200 text-black" type="button">Get Started Now</button>
                        <ul>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">3 Team Members</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                            </li>
                            <li className="mb-4 flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">Individual Email Account</p>
                            </li>
                            <li className="flex items-center">
                            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <p className="font-semibold leading-normal">Premium Support</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
                <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src={require('../../flaro-assets/images/faqs/gradient.svg').default} alt=""/>
                <div className="relative z-10 container px-4 mx-auto">
                <div className="md:max-w-4xl mx-auto">
                    <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">Have any questions?</p>
                    <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none text-black">Frequently Asked Questions</h2>
                    <div className="mb-11 flex flex-wrap -m-1">
                    <div className="w-full p-1">
                        <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-10xl">
                            <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                                <h3 className="mb-4 text-lg font-semibold leading-normal text-black">Do you provide any free plan?</h3>
                                <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.</p>
                            </div>
                            <div className="w-auto p-2">
                                <svg className="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="w-full p-1">
                        <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                            <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                                <h3 className="text-lg font-semibold leading-normal text-black">How to claim your 25% discount offer?</h3>
                            </div>
                            <div className="w-auto p-2">
                                <svg className="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="w-full p-1">
                        <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                            <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                                <h3 className="text-lg font-semibold leading-normal text-black">What’s your refund policy?</h3>
                            </div>
                            <div className="w-auto p-2">
                                <svg className="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="w-full p-1">
                        <a href="#">
                        <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                            <div className="flex flex-wrap justify-between -m-2">
                            <div className="flex-1 p-2">
                                <h3 className="text-lg font-semibold leading-normal text-black">How to get support for the product?</h3>
                            </div>
                            <div className="w-auto p-2">
                                <svg className="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                    <p className="text-gray-600 text-center font-medium">
                    <span>Still have any questions? </span>
                    <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="#">Contact us</a>
                    </p>
                </div>
                </div>
            </section>
            <section className="relative pt-24 pb-28 bg-white overflow-hidden">
                <img className="absolute right-0 top-0" src={require('../../flaro-assets/images/footers/gradient2.svg').default} alt=""/>
                <div className="relative z-10 container px-4 mx-auto">
                <div className="flex flex-wrap justify-between -m-8">
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                    <a className="inline-block" href="#">
                        <img src={require('../../flaro-assets/logos/logo-new.svg').default} alt="" className="w-10 h-10 inline mr-2"/>
                        <span className="text-black font-extrabold text-xl">Nesiatek</span>
                    </a>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                    <h3 className="mb-6 font-semibold leading-normal text-black">Product</h3>
                    <ul>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Careers</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">About Us</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Insights</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">PCI Compliance</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Intro Articles</a></li>
                        <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Pricing</a></li>
                    </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                    <h3 className="mb-6 font-semibold leading-normal text-black">For Developers</h3>
                    <ul>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Docs</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Knowledge Base</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">System Status</a></li>
                        <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Security</a></li>
                    </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                    <h3 className="mb-6 font-semibold leading-normal text-black">Resources</h3>
                    <ul>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">About</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Leadership</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Press/News</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Careers/Team</a></li>
                        <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Contact Us</a></li>
                    </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                    <h3 className="mb-6 font-semibold leading-normal text-black">Legal</h3>
                    <ul>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Docs</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Knowledge Base</a></li>
                        <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">System Status</a></li>
                        <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Security</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>

            </div>
        </div>
    )
}

export default LandingPage;
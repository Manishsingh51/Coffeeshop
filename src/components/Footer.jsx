import React from "react"


function Footer() {
    return (
        <>
            {/*    <!-- Component: Five Columns Footer with Logo --> */}
            <footer className="w-full text-slate-900">
                {/*      <!-- Main footer --> */}
                <div className="border-t border-slate-200 bg-gradient-to-r from-amber-100  to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.6)] pt-16 text-sm">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-4 gap-16 md:grid-cols-8 lg:grid-cols-12">
                            <div
                                className="col-span-4 md:col-span-8 lg:col-span-4"
                                aria-labelledby="footer-header"
                            >
                                <a
                                    id="WindUI-5-logo"
                                    aria-label="WindUI logo"
                                    aria-current="page"
                                    className="mb-6 flex items-center gap-2 whitespace-nowrap text-bold font-bold text-xl leading-6 text-slate-900 focus:outline-none"
                                    href="javascript:void(0)"
                                >

                                    Beans&Brews
                                </a>
                                <p>
                                    Welcome to our Coffee haven! <br />
                                    Explore our aromatic brews,Saver artisanal flavours, and discover the perfect roas to elevate your daily <br /> ritual.
                                </p>
                            </div>
                            <nav
                                className="col-span-3 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-product-5-logo"
                            >
                                <h3
                                    className="mb-6 text-base  font-bold text-slate-900"
                                    id="footer-product-5-logo"
                                >
                                    Links
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#f6e6ca] focus:text-emerald-600"
                                        >
                                            Menu
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#f6e6ca] focus:text-emerald-600"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#f6e6ca] focus:text-emerald-600"
                                        >
                                            Products
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#f6e6ca] focus:text-emerald-600"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-docs-5-logo"
                            >
                                <h3
                                    className="mb-6 text-base font-bold text-slate-900"
                                    id="footer-docs-5-logo"
                                >
                                    Menu
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#dec291] focus:text-emerald-600"
                                        >
                                            Cappuccino
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#dec291] focus:text-emerald-600"
                                        >
                                            Latte
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#efd2a1] focus:text-emerald-600"
                                        >
                                            Americano
                                        </a>

                                    </li>
                                </ul>
                            </nav>

                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-get-in-touch-5-logo"
                            >
                                <h3
                                    className="mb-6 text-base font-bold text-slate-900"
                                    id="footer-get-in-touch-5-logo"
                                >
                                    Get in touch
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#f4dcaf] focus:text-emerald-600"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#f4dcaf] focus:text-emerald-600"
                                        >
                                            Support
                                        </a>
                                    </li>

                                    <li className="mb-2 leading-6">
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-[#f4dcaf]  focus:text-emerald-600"
                                        >
                                            Social media
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <p className="text-sm text-slate-700 px-96 pt-12">
                        &copy; Copyright 2022. All Rights Reserved by Manish Singh.
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer
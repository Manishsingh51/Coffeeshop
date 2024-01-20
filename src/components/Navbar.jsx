'use client'

import React from 'react'
import {  Menu, X } from 'lucide-react'
import { SiCoffeescript } from "react-icons/si";
import Button from '../layouts/Button';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Menu',
        href: '/Menu',
    },
    {
        name: 'About Us',
        href: '/About',
    },
    {
        name: 'Products',
        href: '#',
    },
    {
        name: 'Reviews',
        href: '#',
    },

   
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative w-full from-backgroundColor bg-[#FFDCAB]">
            <div className="flex flex-row justify-between p-5 lg:px-32 px-5  bg-gradient-to-r from-amber-100  to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.6)]">
                <div className="inline-flex cursor-pointer items-center gap-2">
                    <span>
                        <SiCoffeescript size={28} style={{ marginLeft: '-15px' }} />
                    </span>
                    <span className="font-bold text-xl" style={{ marginLeft: '-5px' }}>Beans&Brews</span>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-9" style={{ marginTop: '3px' }}>
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                >
                                    <span className=' absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                                    {item.name}
                                </a>

                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block font-bold">
                 
                <Button title="Login"/>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <SiCoffeescript size={28} style={{ marginLeft: '-15px' }} />
                                        </span>

                                        <span className="font-bold">Beans&Brews</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3  text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                
                                <button
                                type="button"
                                className="mt-4 w-full rounded-md bg-[#FFDCAB] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#AB6B2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                           
                           >
                            
                                <Link to="/Login">Login</Link>
                            </button>
                                
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar

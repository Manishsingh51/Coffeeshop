import React from 'react'


function Home() {
    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 bg-gradient-to-r from-amber-100  to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.6)]">
                <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">

                    <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full p-1">
                        <div className="rounded-full p-1 px-2">

                        </div>

                    </div>
                    <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                        Start your day with a steaming cup of Coffee
                    </h1>
                    <p className="mt-8 text-lg text-gray-700">
                        Welcome to our Coffee haven!
                        Explore our aromatic brews,Saver artisanal flavours, and discover the perfect roas to elevate your daily ritual.
                    </p>
                    <form action="" className="mt-8 flex items-start space-x-2">
                        <div>
                            <button
                                type="button"
                                className="border border-white rounded-full bg-[#FFDCAB] px-6 py-1 hover:text-[#AB6B2E] transition-all"
                            >
                                ADD TO CART
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="border border-white rounded-full bg-[#FFDCAB] px-6 py-1 hover:text-[#AB6B2E] transition-all"
                            >
                                MORE MENU
                            </button>
                        </div>
                    </form>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 pt-30">
                    <img src='abc.png' width={500} height={400} />
                </div>
            </div>
        </div>
    )
}
export default Home

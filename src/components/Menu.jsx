import React from 'react'
import MenuCard from '../layouts/MenuCard'
import mocha from "../assets/mocha.jpeg"
import blackeye from "../assets/blackeye.jpeg"
import americano from "../assets/americano.jpeg"
import cappu from "../assets/cappu.jpeg"
import cbreve from "../assets/cbreve.jpg"
import latte from "../assets/latte.jpeg"
import macchiato from "../assets/macchiato.jpeg"
import ristretto from "../assets/ristretto.jpeg"
import cortado from "../assets/cortado.jpeg"




const Menu = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#FFDCAB]'>
            <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>
            <div className='flex flex-wrap justify-center gap-28'>
                <MenuCard img={mocha} title="Mocha Coffee" />
                <MenuCard img={americano} title="Americano" />
                <MenuCard img={blackeye} title="Black Eye" />
                <MenuCard img={cappu} title="Cappuccino" />
                <MenuCard img={cbreve} title="Coffee Breve" />
                <MenuCard img={latte} title="Latte Coffee" />
                <MenuCard img={macchiato} title="Macchiato" />
                <MenuCard img={ristretto} title="Ristretto" />
                <MenuCard img={cortado} title="Cortado" />

            </div>
        </div>
    )
}
export default Menu
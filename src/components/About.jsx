import React from 'react'
import ser from "../assets/ser.webp"
import Button from '../layouts/Button'
import styles from "./About.module.css"

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center lg:px-32 px-5 bg-[#FFDCAB] pb-9 '>
            <h1 className='font-semibold text-center text-4xl lg:mt-8 mb-8'>About Us</h1>

            <div className='flex flex-col lg:flex-row items-center gap-12'>
                <div className='lg:w-46 w-2/3'>
                    <img className='rounded-lg' src={ser} alt='abt' />
                </div>

                <div className='w-full lg:w-2/4 p-4 space-y-3'>
                    <h2 className='font-semibold text-3xl'>What Makes Our Coffee Special?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestias. Soluta reprehenderit sunt molestiae ullam ab, aliquam nostrum alias adipisci odit dolore incidunt ipsum suscipit perspiciatis molestias, nihil nulla dicta?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <Button title="Learn More"/>
                </div>
            </div>
        </div>
    )
}
export default About
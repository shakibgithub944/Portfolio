import React from 'react';
import '../../../App.css';
import Navber from '../Navber/Navber';
import programmer2 from '../../../assets/shakib.png'



const Header = () => {
    return (
        <section className='bg-gray-800 h-screen'>
            <Navber></Navber>
            <div className="md:grid md:grid-cols-2 gap-10 h-screen">
                <div className=' pt-28 pl-20 md:flex items-end md:items-center md:ml-60'>
                    <div>
                        <p className='font-bold text-cyan-500'>Hello,</p>
                        <h1 className='text-4xl md:text-5xl font-bold text-sky-400'>I'm Shakib Miah</h1>
                        <p className='font-bold text-gray-400 mt-2'>Full Stack Web Developer</p>
                        <p></p>
                        <div></div>
                        <span className='btn btn-outline btn-info font-bold my-5'>Hire Me</span>
                    </div>
                </div>
                <div className='flex items-center md:ml-28'>
                    <img src={programmer2}  alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;
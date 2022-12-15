import React from 'react';
import '../../../App.css';
import Navber from '../Navber/Navber';
import programmer2 from '../../../assets/shakib.png'
import { FaLinkedin, FaGithubSquare, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTypewriter } from 'react-simple-typewriter'



const Header = () => {

    const [text] = useTypewriter({
        words: [`'m Shakib Miah`],
        loop: 0
      })

    return (
        <section id='header' className='bg-gray-800 h-screen'>
            <Navber></Navber>
            <div className="md:grid md:grid-cols-2 gap-10 h-screen">
                <div className=' pt-28 pl-20 md:flex items-end md:items-center md:ml-60'>
                    <div>
                        <p className='font-bold text-cyan-500'>Hello,</p>
                        {/* <h1 className='text-4xl md:text-5xl font-bold text-sky-400'>I'm Shakib Miah</h1> */}
                        <h1 className='text-4xl md:text-5xl font-bold text-sky-400'>I{text}</h1>

 
                        <p className='font-bold text-gray-400 mt-2'>Full Stack Web Developer</p>

                        <div className='flex gap-3 mt-4'>
                            <a target={0} href='https://www.linkedin.com/in/md-shakib-miah-523025230/' className='text-blue-600'><FaLinkedin></FaLinkedin></a>
                            <a target={0} href='https://github.com/shakibgithub944' className='text-gray-600'><FaGithubSquare></FaGithubSquare></a>
                            <a target={0} href='https://www.facebook.com/nazmush.shakib.737' className='text-blue-600'><FaFacebook></FaFacebook></a>
                        </div>
                        <Link to='contact' spy={true} smooth={true} offset={-80} duration={1000}>
                            <span className='btn btn-outline btn-info font-bold my-5'>Hire me</span>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center md:ml-28'>
                    <img src={programmer2} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;
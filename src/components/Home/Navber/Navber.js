import React from 'react';
import '../../../App.css'
import { Link as NavLink } from 'react-scroll'
import resume from '../../../assets/shakibmiahResumeFullStack.pdf'
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='text-white w-full'>
            <div className="navbar fixed z-50 bg-gray-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-400 font-bold">
                            <li><NavLink to='about' spy={true} smooth={true} offset={-80} duration={1000} ><span>About Me</span></NavLink></li>
                            <li><NavLink to='skills' spy={true} smooth={true} offset={50} duration={1000} ><span>Skills</span></NavLink></li>
                            <li><NavLink to='projects' spy={true} smooth={true} offset={-100} duration={1000} ><span>Projects</span></NavLink></li>
                            <li><NavLink to='contact' spy={true} smooth={true} offset={50} duration={1000} ><span>Contact</span></NavLink></li>
                            <li><Link to='/blog'><span>Blog</span></Link></li>
                        </ul>
                    </div>
                    <NavLink to='header' spy={true} smooth={true} offset={-80} duration={1000} className="normal-case text-2xl ml-8">
                        <span className='font-bold text-sky-500'>S</span>
                        <span className='font-bold text-primary'>H</span>
                        <span className='font-bold text-green-500'>A</span>
                        <span className='font-bold text-secondary'>K</span>
                        <span className='font-bold text-accent'>I</span>
                        <span className='font-bold text-yellow-500'>B</span>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-400 font-bold">
                        <li><NavLink to='about' spy={true} smooth={true} offset={-80} duration={1000} ><span>About Me</span></NavLink></li>
                        <li><NavLink to='skills' spy={true} smooth={true} offset={50} duration={1000} ><span>Skills</span></NavLink></li>
                        <li><NavLink to='projects' spy={true} smooth={true} offset={-100} duration={1000} ><span>Projects</span></NavLink></li>
                        <li><NavLink to='contact' spy={true} smooth={true} offset={50} duration={1000} ><span>Contact</span></NavLink></li>
                        <li><Link to='/blog'><span>Blog</span></Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={resume} download='shakibResume' target={0} className="btn btn-outline btn-info text-white font-bold">
                        Resume</a>

                </div>
            </div>
        </div>
    );
};

export default Navber;
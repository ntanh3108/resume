import React from 'react'
import image from '/public/avatar.jpg'
import {BiCurrentLocation, BiEnvelope, BiMoon, BiPhone, BiSun} from 'react-icons/bi'
import { FaResearchgate, FaSquareFacebook, FaGoogleScholar } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";


const HeaderLeft = ({darkMode, toggleDarkMode}) => {
  return (
    <div className='min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black 
    dark:text-white sm:border-r dark:border-gray-700'>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-5">
                <img src={image} alt=""  className='w-32 rounded-full' />

                <div className='text-center space-y-1'>
                    <h1 className='text-4xl font-light'>
                        Loan <span className='font-semibold'>Dang</span>
                    </h1>
                    <h3 className='text-xl font-light'>Position</h3>
                </div>

                <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
                    {
                        darkMode ? (
                            <BiSun className='text-2xl' />
                        ) : (
                            <BiMoon className='text-2xl' />
                        )
                    }
                </button>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <ul className='space-y-3'>
                    <li className='flex itmes-center gap-2'>
                        <BiCurrentLocation className='text-xl'/>
                        <span>District 10, Ho Chi Minh City, Vietnam</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiEnvelope className='text-xl'/>
                        <span>
                        dangthihongloan01102018@gmail.com
                        </span>
                    </li>
                    <li className='flex itmes-center gap-2'>
                        <BiPhone className='text-xl'/>
                        <span>+84393867689</span>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col items-start justify-normal gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>SOCIAL</h1>

                    <ul className='space-y-3'>
                    <li className='flex itmes-center gap-2'>
                        <FaGoogleScholar className='text-xl'/>
                        <span><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">@googlescholar</a></span>
                    </li>
                    <li className='flex itmes-center gap-2'>
                        <FaResearchgate className='text-xl'/>
                        <span><a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">@researchgate</a></span>
                    </li> 
                    <li className='flex itmes-center gap-2'>
                        <FaSquareFacebook className='text-xl'/>
                        <span><a href="https://www.facebook.com/profile.php?id=100009466625562" target="_blank" rel="noopener noreferrer">Đặng Loan Hồng</a></span>
                    </li>
                    <li className='flex itmes-center gap-2'>
                        <SiZalo className='text-xl'/>
                        <span><a href="https://zalo.me/0393867689" target="_blank" rel="noopener noreferrer">Hồng Loan</a></span>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <h1 className='text-base font-semibold md:text-2xl'>EDUCATION</h1>
                <ul>
                    <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px]
                    before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
                    before:bg-black dark:before:bg-white before:transform'>
                        <span className='font-semibold md:text-lg'><a href="https://www.facebook.com/@thptchuyenhoanglekhatayninh" target='_blank'>Hoang Le Kha High School for The Gifted, Tay Ninh City, Vietnam</a></span>
                        <span className='font-light'>Major: Biology</span>
                        <span className='text-sm text-gray-400'>09/2016 - 05/2019</span>
                    </li>
                </ul>

                <ul>
                    <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px]
                    before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
                    before:bg-black dark:before:bg-white before:transform'>
                        <span className='font-semibold md:text-lg'><a href="https://en.hcmus.edu.vn/" target='_blank'>Vietnam National University, Ho Chi Minh City - University of Science</a></span>
                        <span className='font-light'>Major: Chemistry</span>
                        <span className='text-sm text-gray-400'>09/2020 - 09/2024</span>
                        <span className='font-light mt-5'>GPA: 3.21/4.0 - Very Good Classification</span>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>SKILLS</h1>

                    <div className='flex flex-wrap gap-3'>
                        <div className='flex flex-wrap gap-3'>
                            <span className='rounded-xl bg-black text-white p-3 text-left dark:bg-white
                            dark:text-black'>
                                This is my first skill and This is my first skill
                            </span>
                        </div>

                         <div className='flex flex-wrap gap-3'>
                            <span className='rounded-xl bg-black text-white p-3 text-left dark:bg-white
                            dark:text-black'>
                                This is my first skill
                            </span>
                        </div>    

                        <div className='flex flex-wrap gap-3'>
                            <span className='rounded-xl bg-black text-white p-3 text-left dark:bg-white
                            dark:text-black text-ellipsis'>
                                This is my first skill 
                            </span>
                        </div>

                        <div className='flex flex-wrap gap-3'>
                            <span className='rounded-xl bg-black text-white p-3 text-left dark:bg-white
                            dark:text-black'>
                                This is my first skill
                            </span>
                        </div>
                    </div>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <h1 className='text-base font-semibold md:text-2xl'>CERTIFICATES</h1>

                <div className='list-disc md:text-lg'>
                    <ul className='flex list-disc flex-col gap-3'>
                        <li><span className='font-bold'>IELTS 6.0 (From IDP)</span> - 10/2024</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <h1 className='text-base font-semibold md:text-2xl'>LANGUAGES</h1>
                
                <ul className='list-disc md:text-lg'>
                    <li><span className='font-bold'>Vietnamese</span>: First Language</li>
                    <li><span className='font-bold'>English</span>: Intermediate</li>
                </ul>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <h1 className='text-base font-semibold md:text-2xl'>HOBBIES</h1>
                
                <ul className='list-disc md:text-lg'>
                    <li>Reading books</li>
                    <li>Listening to music</li>
                    <li>Watching movies</li>
                    <li>Learning baking</li>
                    <li>Drawing</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeaderLeft
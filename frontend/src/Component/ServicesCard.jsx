import React from 'react'
import FreeWifi from '../Assets/Images/wifi.jpg'
import LiveChat from '../Assets/Images/Customer-Service.jpg'
import Healthcare from '../Assets/Images/Health-care.jpg'
import CBT from '../Assets/Images/School-cbt.jpg'
import Library from '../Assets/Images/Library.jpg'
import ELibrary from '../Assets/Images/E-libary.jpg'
import Accommodation from '../Assets/Images/Accomodation.jpg'


const ServicesCard = () => {
  return (
    <div>
      <section className='flex flex-col md:flex-row flex-wrap max-w-[1200px] mx-auto gap-x-8 gap-y-8 justify-between'>
        <div className='w-full md:w-72 pb-6 shadow-md hover:shadow-lg '>
            <img className='w-full' src={FreeWifi} alt="" />
            <div className='mx-4 space-y-6'>
                <p className='text-lg font-semibold'>Free Wifi Zone</p>
                <p className='text-gray-500'>Our institution is equipped with a strong and reliable internet service, with which student can enjoy, and have access to online courses and materials to aid academic development.</p>
            </div>
        </div>

        <div className='w-full md:w-72 space-y-4 shadow-md hover:shadow-lg '>
            <img className='w-full' src={LiveChat} alt="" />
            <div className='mx-4 space-y-6'>
                <p className='text-lg font-semibold'>Live Chat Assistance</p>
                <p className='text-gray-500'>We are here 24/7 to give live support to our students and parents in respect to any enquires or support. using our chat robot we immediately get In-touch and ensure you get the best solutions .</p>
            </div>
        </div>
        <div className='w-full md:w-72 shadow-md hover:shadow-lg '>
            <img className='w-full' src={Healthcare} alt="" />
            <div className='mx-4 space-y-6'>
                <p className='text-lg font-semibold mt-3'>Healthcare</p>
                <p className='text-gray-500'>Our healthcare involves  your hospital visits, prescribed drugs, and much more. Enjoy quality healthcare services from our team of expert doctors and healthcare providers in Nigeria.</p>
            </div>
        </div>

        <div className='w-full md:w-72 shadow-md hover:shadow-lg '>
            <img className='w-full' src={CBT} alt="" />
            <div className='mx-4 space-y-6'>
                <p className='text-lg font-semibold mt-3'>CBT Exams</p>
                <p className='text-gray-500'>The CBT exam is a computer-based exam made up of theoretical practice-based knowledge. Exam results are emailed to candidates within 48 hours after taking the examination and you will be awarded your grades.</p>
            </div>
        </div>

        <div className='w-full md:w-72 shadow-md hover:shadow-lg '>
            <img className='w-full' src={Library} alt="" />
            <div className='mx-4 space-y-6'>
                <p className='text-lg font-semibold mt-3'>Library</p>
                <p className='text-gray-500'>The Library of the ED-JOHN  has all required materials for studies and has a suitable reading space and environment for students.</p>
            </div>
        </div>

        <div className='w-full md:w-72 pb-6 shadow-md hover:shadow-lg '>
            <img className='w-full' src={ELibrary} alt="" />
            <div className='mx-4 space-y-6'>
                <p className='text-lg font-semibold mt-3'>E-Library</p>
                <p className='text-gray-500'>The e-library of ED-JOHN is poised to dispel and shatter every form of academic and research darkness, by way of providing adequate, relevant and timely information to every of its users to put them at the cutting edge in their various areas of interests.</p>
            </div>
        </div>

        <div className='w-full md:w-72 pb-6 shadow-md hover:shadow-lg '>
            <img className='w-full' src={Accommodation} alt="" />
            <div className='mx-4 space-y-6'>
                <p className='text-lg font-semibold mt-3'>Easy Accomodation</p>
                <p className='text-gray-500'>Students can choose from different accommodation locations with safe, convenient, and high-quality housing around the neighborhood.</p>
            </div>
        </div>
    
      </section>
    </div>
  )
}

export default ServicesCard

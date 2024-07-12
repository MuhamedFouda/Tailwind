import './App.css';
import img1 from './assets/logo-light.png'
import img2 from './assets//undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_search_engines_041x_-2-_cl95_o7o8_pigd_-1-_wbm3_t5p8_-1-_mt5l_-2-_dhxr_(2)_nmxe.png'
import img3 from './assets/279365889_5019951128104210_5024801244489260819.jpg'
import img4 from './assets/285129033_5110666592365996_4386452234954340548_n.jpg'
import img5 from './assets/logo-dark.png'
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import StrapiCategory from './components/StrapiCategory/Strapi';
import Strapi from './components/StrapiProducts/Strapi';


function App() {

  return (
    <div className='App'>
      <nav className=' container text-slate-900 flex flex-row justify-center items-center m-auto pt-3 h-20 '>
        <div className="flex item-center justify-between w-full pr-3">
          <div>
            <img src={img1} className='h-full w-40 ' />
          </div>
          <div className='hidden md:flex flex-row '>
            <ul className='flex flex-row items-center space-x-6 px-2 text-slate-900'>
              <li className='hover:text-yellow-500 hover:cursor-pointer'>Portfolio</li>
              <li className='hover:text-yellow-500 hover:cursor-pointer'>About</li>
              <li className='hover:text-yellow-500 hover:cursor-pointer'>Contact</li>
              <li className='hover:text-yellow-500 hover:cursor-pointer'>Social</li>
              <li className='hover:text-yellow-500 hover:cursor-pointer list-none'><button className='bg-orange-500 rounded-full py-1 px-4 hover:bg-slate-900 text-white'>Call Me</button></li>
            </ul>
          </div>
        </div>


      </nav>

      <section id="hero">
        <div className="px-8 md:px-10 lg:px-20 xl:px-24 pt-6 flex  flex-col-reverse md:flex-row justify-center align-center space-x-6">
          <div className='md:w-1/2 flex flex-col justify-center space-y-4 py-6 text-center md:text-left text-slate-900'>
            <h1 className='font-bold text-3ml md:text-4xl lg:text-5xl'>Rapidly build modern websites without ever leaving your HTML.</h1>
            <p>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
            <li className='hover:text-yellow-500 hover:cursor-pointer list-none'><button className='bg-orange-500 w-40 rounded-full py-1 px-4 hover:bg-slate-900 text-white'>Call Me</button></li>

          </div>
          <div className='md:w-1/2'>
            <img src={img2} alt='photoTawilwind' className='w-full h-full' />
          </div>

        </div>
      </section>


      <section id='author'>
        <div className='px-8 md:px-10 lg:px-20 xl:px-24 my-24 text-center'>
          <h2 className='font-bold text-4xl text-slate-900 mb-8'>“Best practices” don’t actually work.</h2>
          <p className='max-w-5xl mx-auto '>I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>

          <div className='flex flex-col space-y-10 md:flex-row md:space-x-6 mt-20 md:mt-10'>
            <div className="md:w-1/3 bg-slate-100 flex flex-col items-center space-y-2 rounded-lg border border-slate-200 p-6 relative pt-12 md:mt-10">
              <img src={img3} className='rounded-full w-20 h-20 absolute -top-10' />
              <h2 className='font-bold text-lg text-slate-900'>Adam Sandler</h2>
              <p className='leading-6 text-sm'>The way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.</p>
            </div>
            <div className="md:w-1/3 bg-slate-100 flex flex-col items-center space-y-2 rounded-lg border border-slate-200 p-6 relative pt-12 md:mt-10">
              <img src={img4} className='rounded-full w-20 h-20 absolute -top-10 ' />
              <h2 className='font-bold text-lg text-slate-900'>Adam Sandler</h2>
              <p className='leading-6 text-sm'>The way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.</p>
            </div>
            <div className="md:w-1/3 bg-slate-100 flex flex-col items-center space-y-2 rounded-lg border border-slate-200 p-6 relative pt-12 md:mt-10 ">
              <img src={img3} className='rounded-full w-20 h-20 absolute -top-10' />
              <h2 className='font-bold text-lg text-slate-900'>Adam Sandler</h2>
              <p className='leading-6 text-sm'>The way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.</p>
            </div>

          </div>
        </div>
      </section>

      <section className='bg-orange-500 flex flex-col md:flex-row justify-center items-center mx-auto pb-10 md:pb-0'>
        <div className='container flex justify-center items-center md:justify-start px-8 md:px-10 lg:px-20 xl:px-24 py-12 text-slate-100'>
          <p className='text-2xl md:text-3xl text-center'>�� 2022 Tailwind CSS. All rights reserved.</p>
        </div>
        <div className='flex justify-center items-center w-1/3'>
          <li className=' hover:cursor-pointer list-none  '><button className=' w-40 md:h-14 md:ml-0 rounded-full py-1 px-4 bg-white text-orange-500 hover:bg-slate-900 hover:text-white'>Call Me</button></li>
        </div>
      </section>

      <footer className='bg-slate-900 flex flex-row justify-center md:justify-between items-center flex-wrap px-12 py-8 space-y-6 md:px-24'>
        <div className='flex flex-col justify-center items-center md:items-start md:w-1/3 space-y-5 text-white'>
          <p>Copyright © 2023, All Rights Reserved</p>
          <img src={img5} className='w-1/2' />
          <div className='flex flex-row space-x-4'>
            <CiFacebook className='text-4xl text-white' />
            <FaInstagram className='text-4xl text-white' />
            <CiLinkedin className='text-4xl text-white' />
            <CiTwitter className='text-4xl text-white' />
          </div>
        </div>
        <div className='flex flex-row justify-start items-center space-x-4 text-white'>
          <div className='flex flex-col space-y-6'>
            <a href='#'>Home </a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
          </div>
          <div className='flex flex-col space-y-6'>
            <a href='#'>Imprint </a>
            <a href='#'>Privacy</a>
            <a href='#'>Credits</a>
          </div>
        </div>
        <div className=' text-white flex flex-col h-full justify-start items-center space-y-10 md:space-y-20'>
          <div className='flex flex-row space-x-3'>
            <input className='input rounded-full h-10 p-2 text-center' placeholder='Subscribe to Newsletter' />
            <li className=' hover:cursor-pointer list-none  '><button className=' h-10 rounded-full py-1 px-4 text-white bg-orange-500 hover:text-orange-500 hover:bg-white'>Call Me</button></li>
          </div>
            <p>Copyright © 2023, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App

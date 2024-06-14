import { NavLink2 } from '@/constant'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideBar = (props:any) => {

    const pathname= usePathname()
  return (
    <aside className={`${props.side ? "absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 lg:bg-white"
    :'lg:flex lg:w-full lg:relative lg:h-full'}`}>
        <div className={`${props.side ? 'w-full text-orange-500 h-full bg-blue-950 flex-col justify-center p-5 sm:w-3/5 sm:rounded-r-3xl border border-black ':'hidden text-orange-500 lg:top-20 lg:flex lg:justify-center lg:w-[238px] lg:min-h-[90%] lg:bg-blue-950 lg:rounded-xl'}`}> 
            <div className="w-full flex justify-end mr-5 my-5 pr-5 lg:hidden">
                <button onClick={()=>{props.setside(!props.side)}}>
                    <Image src={'/cross-icon.png'} alt={'close'} width={20} height={20} />
                </button>
            </div>
            <div className="w-3/4 m-auto border border-orange-400 shadow shadow-orange-500 py-3 px-5 lg:hidden">
                <div className="text-xl text-bold flex justify-center  ">
                    <h1>explore</h1>
                </div>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur dignissimos nobis tempora quam! Soluta quidem laborum delectus.
                </p>
                <button className="w-full text-center border-orange-400 bg-orange-400 p-0.5 text-blue-950 font-semibold shadow my-3 rounded-full">
                    <span className={`w-full inline-block rounded-full border border-blue-950`}>login</span>
                </button>
            </div>
            <ul className='flex flex-col pt-10 lg:w-full'>
                {NavLink2.map((link)=>{
                        const isActive = link.route===pathname
                        return(
                            <li key={link.route} className={`${link.label==='course'|| link.label==='Universities' ? 'lg:hidden':''} w-full my-3 sm:w-3/4 border-b border-orange-200 flex justify-center sm:mx-auto lg:flex  lg:`}>
                                <Link href={link.route}>{link.label}</Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
        
    </aside>
  )
}

export default SideBar

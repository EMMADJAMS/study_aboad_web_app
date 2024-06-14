'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SideBar from './SideBar'
import { AplicationLink1 } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import link from 'next/link'
import TopNavLink from './TopNavLink'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'



const NavBar = () => {
    const [sideState,setsideState]= useState(false)
    const pathname = usePathname();

    function handleSidebar(){
        setsideState(!sideState)
    }
  return (
    <div>
      <nav className="w-full h-[75px] lg:columns-3 columns-2 flex items-center border-b border-blue-950 shadow-sm mb-2 bg-white">
        <div className="w-2/5">
            <h1 className="text-xl text-bold text-blue-900 flex justify-center">
                <Link href="/" className="text-black ml-2">
                    EDT
                </Link>
            </h1>
        </div>
        <div className="hidden lg:w-4/5 lg:flex ">
            <form action="" className="w-4/5 m-auto border border-black flex bg-white p-1  pl-5 pr-2 rounded-full">
                <input type="text" name="" id="" placeholder='search for courses and universities'className='w-full' />
                <button type="submit">
                <Image src={'/search-icon.png'} alt={'search'} width={'20'} height={"20"} />
                </button>
            </form>
        </div>
        <div className="w-4/5 flex justify-end pr-5">
            <ul className="flex justify-end">
                <li><TopNavLink/></li>
                <li className="mx-3 lg:hidden">
                    <button type="button">
                        <Image src={'/search-icon.png'} alt={'search'} width={'20'} height={"20"} />
                    </button>
                </li>
                <li className="mx-3">
                    <button type="button">
                        <Image src={'/notification-icon.png'} alt={''} width={'20'} height={"20"} />
                    </button>
                </li>
                <li>
                <SignedOut>
                    <SignInButton>Login</SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </li>
                
                <li className="mx-3 lg:hidden">
                    <button type="button" onClick={handleSidebar}>
                        <Image src={'/hamberguer-icon.png'} alt={'search'} width={'20'} height={"20"} />
                    </button>
                </li>
            </ul>
        </div>
      </nav>
      <div className='lg:hidden'><SideBar side={sideState} setside={setsideState} /></div>
    </div>
  )
}

export default NavBar

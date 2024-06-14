'use client'
import React from 'react'
import { NavLink1 } from '@/constant'
import { usePathname } from 'next/navigation'

const TopNavLink = () => {
    const pathname = usePathname();
  return (
    <ul className="flex">
        {NavLink1.map((link)=>{
            const isActive = link.route===pathname
            return(
                <li key={link.id} className='hidden lg:block mx-3'>
                    {link.label}
                </li>
            )
        })}
    </ul>
  )
}

export default TopNavLink

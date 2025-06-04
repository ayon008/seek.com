'use client'
import Logo from '@/Components/Icons/Logo/Logo';
import Link from 'next/link';
import React, { useState } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import { usePathname } from 'next/navigation';
import { Button } from '@/Components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const lists = [
        { name: 'Job Search', link: '/' },
        { name: 'Profile', link: '/profile' },
        { name: 'Career Advice', link: '/career_advice' },
        { name: 'Explore Companies', link: '/explore_companies' }
    ]

    const pathName = usePathname();

    const user = false;
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-white max-w-[1280px] mx-auto'>
            <div className='flex items-center justify-between p-6'>
                <div className='flex items-center gap-10'>
                    <div>
                        <Logo />
                    </div>
                    <div className='2xl:flex xl:flex hidden items-center gap-6'>
                        {lists.map((list, i) => {
                            const { name, link } = list;
                            return (
                                <Link key={i} className={`font-medium text-sm ${pathName === link ? 'border-b-2 pb-2 border-secondary text-secondary' : 'border-b-0 pb-2 text-primary '}`} href={link}>{name}</Link>
                            )
                        })}
                    </div>
                </div>
                {
                    user ? <></> :
                        <div className='2xl:flex xl:flex hidden items-center gap-6'>
                            <Link href={'/login'} className='cursor-pointer'>
                                <PrimaryButton text={'Sign in'} />
                            </Link>
                            <Link href={'/employee_site'} className='text-secondary'>Employee Site</Link>
                        </div>
                }
                <Button onClick={() => setOpen(!isOpen)} className={'shadow-none bg-white text-black 2xl:hidden xl:hidden flex'}>Menu <ChevronDown /></Button>
            </div>
            {
                isOpen && <div className='bg-white w-full h-screen'>
                    <div className='flex flex-col'>
                        {lists.map((list, i) => {
                            const { name, link } = list;
                            return (
                                <Link key={i} className={`font-medium text-sm ${pathName === link ? 'border-l-4 border-secondary text-secondary' : 'text-primary '} p-4`} href={link}>{name}</Link>
                            )
                        })}
                        <Link href={'/login'} className='cursor-pointer p-4'>
                            <PrimaryButton text={'Sign in'} />
                        </Link>
                        <Link href={'/employee_site'} className='text-secondary p-4'>Employee Site</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;
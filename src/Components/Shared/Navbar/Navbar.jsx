'use client'
import Logo from '@/Components/Icons/Logo/Logo';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const lists = [
        { name: 'Job Search', link: '/' },
        { name: 'Profile', link: '/profile' },
        { name: 'Career Advice', link: '/career_advice' },
        { name: 'Explore Companies', link: '/explore_companies' }
    ]

    const pathName = usePathname();

    const user = false;

    return (
        <div className='bg-white max-w-[1280px] mx-auto p-6'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-10'>
                    <div>
                        <Logo />
                    </div>
                    <div className='flex items-center gap-6'>
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
                        <div className='flex items-center gap-6'>
                            <Link href={'/login'} className='cursor-pointer'>
                                <PrimaryButton text={'Sign in'} />
                            </Link>
                            <Link href={'/employee_site'} className='text-secondary'>Employee Site</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
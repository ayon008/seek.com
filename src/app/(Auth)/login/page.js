import Logo from '@/Components/Icons/Logo/Logo';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-[1280px] mx-auto p-6'>
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className='p-6'>
                {/* <h2>Are you an employer?</h2> */}
                <div className='max-w-[612px] mx-auto'>
                    <h1 className='text-4xl font-bold'>Sign In</h1>
                    <form className='mt-6'>
                        <div>
                            <Label htmlFor="email" className={'text-xl mb-3'}>Email address</Label>
                            <Input className={'bg-white py-7 focus:ring-blue-400'} type="email" id="email" placeholder="Enter Keywords" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
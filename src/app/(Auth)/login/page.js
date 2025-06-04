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
            <div className=''>
                {/* <h2>Are you an employer?</h2> */}
                <div className='max-w-[612px] mx-auto border-2 rounded-3xl p-8'>
                    <h1 className='text-4xl font-bold'>Sign In</h1>
                    <form className='mt-6'>
                        <div>
                            <Label htmlFor="email" className={'text-xl mb-3'}>Email address</Label>
                            <Input className={'bg-white py-7 focus:ring-blue-400'} type="email" id="email" placeholder="Enter Keywords" />
                        </div>
                    </form>
                    <div class="flex items-center my-4">
                        <hr class="flex-grow border-t-2 border-gray-300" />
                        <span class="mx-4 text-gray-500 text-lg">or</span>
                        <hr class="flex-grow border-t-2 border-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
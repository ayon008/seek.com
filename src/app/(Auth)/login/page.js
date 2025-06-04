import Logo from '@/Components/Icons/Logo/Logo';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import Link from 'next/link';
import React from 'react';
import google from '../../../../public/Google-2015-G-logo.webp'
import Image from 'next/image';
import { montserrat } from '@/Components/Fonts/Montserrat';
import facebook from '../../../../public/download.png'
import apple from '../../../../public/images (1).png'

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
                    <form className='mt-6 space-y-6'>
                        <div>
                            <Label htmlFor="email" className={'text-xl mb-3'}>Email address</Label>
                            <Input className={'bg-white py-7 focus:ring-blue-400'} type="email" id="email" placeholder="Enter email address" />
                        </div>
                        <div>
                            <Label htmlFor="password" className={'text-xl mb-3'}>Password</Label>
                            <Input className={'bg-white py-7 focus:ring-blue-400'} type="password" id="password" placeholder="Enter password" />
                        </div>
                    </form>
                    <div class="flex items-center my-4">
                        <hr class="flex-grow border-t-2 border-gray-300" />
                        <span class="mx-4 text-gray-500 text-lg">or</span>
                        <hr class="flex-grow border-t-2 border-gray-300" />
                    </div>
                    <div className='space-y-4'>
                        <Button className={'w-full justify-start bg-white border-2 border-black text-black py-6 hover:bg-white cursor-pointer'}><Image className='w-[40px] h-[40px]' src={google} alt="" /><span className={`${montserrat.className} text-lg w-fit mx-auto`}>Continue with Google</span></Button>
                        <Button className={'w-full justify-start bg-white border-2 border-black text-black py-6 hover:bg-white cursor-pointer'}><Image className='w-[40px] h-[40px]' src={facebook} alt="" /><span className={`${montserrat.className} text-lg w-fit mx-auto`}>Continue with Facebook</span></Button>
                        <Button className={'w-full bg-white border-2 justify-start border-black text-black py-6 hover:bg-white cursor-pointer'}><Image className='w-[40px] h-[40px]' src={apple} alt="" /><span className={`${montserrat.className} text-lg w-fit mx-auto`}>Continue with Apple</span></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
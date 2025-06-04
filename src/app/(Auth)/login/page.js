'use client';

import Logo from '@/Components/Icons/Logo/Logo';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import google from '../../../../public/Google-2015-G-logo.webp';
import Image from 'next/image';
import { montserrat } from '@/Components/Fonts/Montserrat';
import facebook from '../../../../public/download.png';
import apple from '../../../../public/images (1).png';

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Login form data:', data);
        // You can now call your login API here
    };

    return (
        <div className='max-w-[1280px] mx-auto px-6 pt-6 pb-10'>
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className='max-w-[612px] mx-auto mt-8'>
                <h2 className={`${montserrat.className} w-fit ml-auto my-2 underline`}>
                    <Link href={'/employer'}>Are you an employer?</Link>
                </h2>
                <div className='border-2 rounded-3xl p-8'>
                    <h1 className='text-4xl font-bold'>Sign In</h1>
                    <form className='mt-6 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Label htmlFor="email" className='text-xl mb-3'>Email address</Label>
                            <Input
                                className='bg-white py-7 focus:ring-blue-400'
                                type="email"
                                id="email"
                                placeholder="Enter email address"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Enter a valid email',
                                    },
                                })}
                            />
                            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="password" className='text-xl mb-3'>Password</Label>
                            <Input
                                className='bg-white py-7 focus:ring-blue-400'
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                })}
                            />
                            {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                        </div>
                        <Button type="submit" className='w-full bg-[#FD0585] py-6 text-lg'>Sign In</Button>
                    </form>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t-2 border-gray-300" />
                        <span className="mx-4 text-gray-500 text-lg">or</span>
                        <hr className="flex-grow border-t-2 border-gray-300" />
                    </div>

                    <div className='space-y-4'>
                        <Button className='w-full justify-start bg-white border-2 border-black text-black py-6 hover:bg-white cursor-pointer'>
                            <Image className='w-[40px] h-[40px]' src={google} alt="Google" />
                            <span className={`${montserrat.className} text-lg w-fit mx-auto`}>Continue with Google</span>
                        </Button>
                        <Button className='w-full justify-start bg-white border-2 border-black text-black py-6 hover:bg-white cursor-pointer'>
                            <Image className='w-[40px] h-[40px]' src={facebook} alt="Facebook" />
                            <span className={`${montserrat.className} text-lg w-fit mx-auto`}>Continue with Facebook</span>
                        </Button>
                        <Button className='w-full bg-white border-2 justify-start border-black text-black pt-6 pb-7 hover:bg-white cursor-pointer'>
                            <Image className='w-[40px] h-[40px]' src={apple} alt="Apple" />
                            <span className={`${montserrat.className} text-lg w-fit mx-auto`}>Continue with Apple</span>
                        </Button>
                    </div>

                    <p className={`mt-6 ${montserrat.className}`}>
                        Don't have an account?{' '}
                        <span className='underline font-semibold'>
                            <Link href={'/register'}>Register</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;

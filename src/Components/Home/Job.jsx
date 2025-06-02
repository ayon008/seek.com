import React from 'react';
import { montserrat } from '../Fonts/Montserrat';
import image from '../../../public/f3c5292cec0e05e4272d9bf9146f390d366481d0.png'
import Image from 'next/image';
import { Bookmark, X } from 'lucide-react';

const Job = () => {
    return (
        <div className='flex flex-col h-full p-6 rounded-[20px] border-[#EAECF1] border-2 hover:border-secondary transition-all duration-300 '>
            <div className={`${montserrat.className} flex justify-between items-stretch h-full`}>
                <div className={`flex flex-col gap-2 flex-1`}>
                    <h2 className='text-xl font-semibold'>Front End (react) Engineer</h2>
                    <p className='text-base text-primary'>Sparkle It Limited, Bangladesh</p>
                    <p className='text-sm text-primary'>Dhaka,Bangladesh</p>
                    <p className='text-xs text-primary'>26d ago</p>
                </div>
                <div className='w-fit ml-auto flex flex-col justify-between items-end '>
                    <Image src={image} alt='image' width={100} height={65} className='w-[100px] h-[65px] object-contain' />
                    <div className='flex items-center'>
                        <span className='hover:bg-[#E5E7EB] bg-white transition-all duration-300 p-3 rounded-full'>
                            <Bookmark className='w-4 h-4' />
                        </span>
                        <span className='hover:bg-[#E5E7EB] bg-white transition-all duration-300 p-3 rounded-full'>
                            <X className='w-4 h-4' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
'use client'
import React from 'react';
import Job from './Job';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import image from '../../../public/1c056a984962480605a20a31bcae496022b57b25.jpeg'
import Image from 'next/image';
import brandLogo from '../../../public/f3c5292cec0e05e4272d9bf9146f390d366481d0.png'
import { BadgeCheck, Banknote, Building, Clock, ExternalLink, MapPin, MoreVertical } from 'lucide-react';
import { montserrat } from '../Fonts/Montserrat';
import { Button } from '../ui/button';

const AllJobs = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger className="mt-2 flex flex-col justify-between gap-3 w-full text-left">
                    {
                        Array.from({ length: 10 }, (_, i) => i).map((_, i) => <Job key={i} />)
                    }
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="bg-white"
                    style={{ maxWidth: '940px' }}
                    onCloseAutoFocus={(e) => {
                        e.preventDefault(); // Prevent scroll-to-trigger
                    }}
                >
                    <SheetHeader className={'px-6 pt-20 overflow-y-scroll'}>
                        <SheetTitle>
                            <Image src={image} className='w-full h-[320px] object-cover rounded-t-3xl' alt='ímage' />
                        </SheetTitle>
                        <SheetDescription className={'pt-10 px-16 relative'}>
                            <div className='flex items-center gap-4 w-fit absolute top-8 right-12'>
                                <div className='bg-[#EBEFF2] p-4 rounded-full cursor-pointer'>
                                    <ExternalLink />
                                </div>
                                <div className='bg-[#EBEFF2] p-4 rounded-full cursor-pointer'>
                                    <MoreVertical />
                                </div>
                            </div>
                            <div className=''>
                                {
                                    brandLogo && <Image src={brandLogo} className='w-auto h-auto mb-16' alt='' />
                                }
                                <h1 className='text-3xl hover:underline transition-all duration-300 w-fit text-black'>Developer</h1>
                                <div className='flex items-center gap-1'>
                                    <p className='text-base text-primary mt-1 hover:underline transition-all duration-300'>The Dinner Ladies </p>
                                    <BadgeCheck className='w-4 h-4 mt-1' />
                                    <p className={`text-base text-primary mt-1 hover:underline transition-all duration-300 ml-3 ${montserrat.className}`}>View All Jobs</p>
                                </div>
                                <div className={`${montserrat.className} mt-8 space-y-4`}>
                                    <div className='flex items-center gap-4'>
                                        <MapPin className='w-4 h-4' />
                                        <p className='text-black'>Matraville, Sydney NSW</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Building className='w-4 h-4' />
                                        <p className='text-black'>Developers/Programmers (Information & Communication Technology)</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Clock className='w-4 h-4' />
                                        <p className='text-black'>Full time</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Banknote className='w-4 h-4' />
                                        <p className='text-black'>$90,000 – $110,000 per year</p>
                                    </div>
                                </div>
                                <p className={`${montserrat.className} mt-6 text-black `}>Posted 5d ago • More than 150 applicants</p>
                                <div className='mt-6 flex items-center gap-3'>
                                    <Button className={`bg-[#FD0585] text-lg ${montserrat.className} p-6`}>Quick Apply</Button>
                                    <Button className={`text-secondary bg-blue-100 hover:bg-blue-300 text-lg ${montserrat.className} p-6`}>Save</Button>
                                </div>
                                {/* <div>
                                    <p className=''></p>
                                </div> */}
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default AllJobs;

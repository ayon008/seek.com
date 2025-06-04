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
                    <SheetHeader className={'px-6 pt-20'}>
                        <SheetTitle>
                            <Image src={image} className='w-full h-[320px] object-cover rounded-t-3xl' alt='ímage'/>
                        </SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default AllJobs;

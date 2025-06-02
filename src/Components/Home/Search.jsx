'use client'
import React, { useState } from 'react';
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from '../ui/button';
import { ChevronDown, Settings } from 'lucide-react';
import { montserrat } from '../Fonts/Montserrat';

const Search = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-[#051A49] h-fit w-full pb-4'>
            <div className='max-w-[1280px] mx-auto'>
                <form className='grid grid-cols-[3fr_2fr] gap-2  p-6'>
                    <div>
                        <Label htmlFor="email" className={'text-white mb-4 text-xl'}>What</Label>
                        <Input className={'bg-white py-7 focus:ring-blue-400'} type="email" id="email" placeholder="Enter Keywords" />
                    </div>
                    <div>
                        <div className='flex-1 h-full flex flex-col'>
                            <Label htmlFor="email" className={'text-white mb-4 text-xl'}>Where</Label>
                            <div className='flex gap-2 items-end'>
                                <Input className={'bg-white py-7'} type="email" id="email" placeholder="Enter suburb,region or city" />
                                <Button variant={''} type="submit" onClick={() => setOpen(true)} className={'text-white bg-[#FD0585] hover:text-white text-xl uppercase px-6 h-full'}>Seek</Button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={`${!open && 'ml-auto'} w-fit pr-2`}>
                    {
                        !open ? <Button type="button" onClick={() => setOpen(true)} variant={''} className={'text-sm w-fit bg-transparent hover:bg-blend-color'} ><span>More Options</span> <Settings /></Button>
                            : <div className='px-6 flex flex-row items-center gap-3'>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Work Type</span><ChevronDown /></Button>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Work Type</span><ChevronDown /></Button>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Work Type</span><ChevronDown /></Button>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Work Type</span><ChevronDown /></Button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
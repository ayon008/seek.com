'use client'
import React, { useState } from 'react';
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from '../ui/button';
import { ChevronDown, Settings } from 'lucide-react';
import { montserrat } from '../Fonts/Montserrat';

const Search = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropDown] = useState(false)

    const work_types = [
        'Full Time', 'Part Time', 'Contract/Temp', 'Casual/Vacation'
    ]

    const Dropdown = ({ children }) => {
        return (
            <div className='relative'>
                <div onClick={() => setDropDown(true)}>
                    {children}
                </div>
                {
                    dropdown && <div className='w-96 bg-white shadow-2xl absolute bottom z-50 mt-2 rounded-3xl'>
                        <form className='p-6'>
                            {
                                work_types.map((work, i) => {
                                    return (
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' id={`work-${i}`} name={work} value={work} />
                                            <label className={`${montserrat.className} `} for={`work-${i}`}>{work}</label><br></br>
                                        </div>
                                    )
                                })
                            }
                        </form>
                    </div>
                }
            </div>
        )
    }
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
                                <Dropdown>
                                    <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Work Type</span><ChevronDown /></Button>
                                </Dropdown>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Remote</span><ChevronDown /></Button>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Pay</span><ChevronDown /></Button>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Classification</span><ChevronDown /></Button>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Listing Time</span><ChevronDown /></Button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from '../ui/button';
import { ChevronDown, Settings } from 'lucide-react';
import { montserrat } from '../Fonts/Montserrat';

const Search = () => {
    const [open, setOpen] = useState(false);
    const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);
    const [selectedJobTypes, setSelectedJobTypes] = useState([])
    const work_types = [
        'Full Time', 'Part Time', 'Contract/Temp', 'Casual/Vacation'
    ]

    const job_location = ['On-site', 'Hybrid', 'Remote']

    function getWorkTypeLabel(selectedWorkTypes) {
        const len = selectedWorkTypes.length;
        if (len === 1) return selectedWorkTypes[0];
        if (len === 2) return '2 work types';
        if (len === 3) return '3 work types';
        if (len > 3) return 'All Jobs';
        return 'Work Type';
    }

    function getJobTypeLabel(selectedWorkTypes) {
        const len = selectedWorkTypes.length;
        if (len === 1) return selectedWorkTypes[0];
        if (len === 2) return '2 Options';
        return 'Remote';
    }


    const Dropdown = ({ children, list, fn }) => {
        const [dropdown, setDropDown] = useState(false);
        const dropdownRef = useRef(null);
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setDropDown(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);
        return (
            <div className='relative'>
                <div onClick={() => setDropDown(true)}>
                    {children}
                </div>
                <div ref={dropdownRef}>
                    {
                        dropdown && <div className='w-96 bg-white shadow-2xl absolute bottom z-50 mt-2 rounded-3xl'>
                            <form className='p-6 flex flex-col gap-3'>
                                {
                                    list.map((work, i) => {
                                        return (
                                            <div key={i} className="flex items-center gap-4">
                                                <label htmlFor={`work-${i}`} className="flex items-center cursor-pointer select-none gap-4">
                                                    {/* Hidden checkbox */}
                                                    <input
                                                        type="checkbox"
                                                        id={`work-${i}`}
                                                        className="peer hidden"
                                                        name={work}
                                                        value={work}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                fn((prev) => [...prev, work]);
                                                            } else {
                                                                fn((prev) => prev.filter((item) => item !== work));
                                                            }
                                                        }}
                                                        checked={selectedWorkTypes.includes(work)}
                                                    />

                                                    {/* Custom checkbox box */}
                                                    <div className="w-5 h-5 rounded border-2 border-gray-400 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
                                                        {/* Tick icon shown only when checked */}
                                                        <svg
                                                            className="w-3 h-3 text-white hidden peer-checked:block"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>

                                                    {/* Label text */}
                                                    <span className={`${montserrat.className} text-xl`}>{work}</span>
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </form>
                        </div>
                    }
                </div>
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
                                <Dropdown list={work_types} fn={setSelectedWorkTypes}>
                                    <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>{getWorkTypeLabel(selectedWorkTypes)}</span><ChevronDown /></Button>
                                </Dropdown>
                                <Dropdown list={job_location} fn={setSelectedJobTypes}>
                                    <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>{getJobTypeLabel(selectedJobTypes)}</span><ChevronDown /></Button>
                                </Dropdown>
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
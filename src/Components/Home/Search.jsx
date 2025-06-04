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
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);

    const values = [
        { type: 'work_type', value: 'Full Time' },
        { type: 'work_type', value: 'Part Time' },
        { type: 'work_type', value: 'Contract/Temp' },
        { type: 'work_type', value: 'Casual/Vacation' },
        { type: 'job_location', value: 'On-site' },
        { type: 'job_location', value: 'Hybrid' },
        { type: 'job_location', value: 'Remote' },
        { type: 'time', value: 'Any Time' },
        { type: 'time', value: 'Today' },
        { type: 'time', value: 'Last 3 days' },
        { type: 'time', value: 'Last 7 days' },
        { type: 'time', value: 'Last 14 days' },
        { type: 'time', value: 'Last 30 days' }
    ];

    const classification = [
        { value: 'Accounting', amount: '5032' },
        { value: 'Administration & Office Support', amount: '2001' }
    ]

    const work_types = values.filter((value, i) => value.type === 'work_type');
    const job_location = values.filter((value, i) => value.type === 'job_location');
    const time = values.filter((value, i) => value.type === 'time');

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


    const DropDown = ({ children, list }) => {
        const [isOpen, setIsOpen] = useState(false)
        const toggleRef = useRef(null);
        const dropdownRef = useRef(null);
        useEffect(() => {
            const handleClickOutside = (event) => {
                const path = event.composedPath();
                const clickedOutside =
                    !path.includes(dropdownRef.current) && !path.includes(toggleRef.current);

                if (clickedOutside) {
                    setIsOpen(false);
                }
            };

            document.addEventListener("click", handleClickOutside);
            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        }, [setIsOpen]);
        return (
            <div>
                <div ref={toggleRef} onClick={() => setIsOpen((prev) => !prev)}>
                    {children}
                </div>
                {isOpen && (
                    <div
                        ref={dropdownRef}
                        className="w-96 bg-white shadow-2xl absolute bottom z-50 mt-2 rounded-3xl"
                    >
                        <form className="p-6 flex flex-col gap-3">
                            {list.map((work, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <label
                                        htmlFor={`work-${i}`}
                                        className="flex items-center cursor-pointer select-none gap-4"
                                    >
                                        <input
                                            type="checkbox"
                                            id={`work-${i}`}
                                            className="peer hidden"
                                            name={work.value}
                                            value={work.value}
                                        />
                                        <div className="w-4 h-4 rounded border-2 border-gray-400 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-white hidden peer-checked:block"
                                                xmlns="http:www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span> {work.value}</span>
                                        {
                                            work.amount && <span className='w-fit ml-auto'>{work.amount}</span>
                                        }
                                    </label>
                                </div>
                            ))}
                        </form>
                    </div>
                )}
            </div>
        )
    }


    return (
        <div className='bg-[#051A49] h-fit w-full pb-4'>
            <div className='max-w-[1280px] mx-auto'>
                <form className='grid 2xl:grid-cols-[3fr_2fr] xl:grid-cols-[3fr_2fr] 2xl:grid-rows-1 xl:grid-rows-1 grid-rows-3 gap-2 p-6'>
                    <div>
                        <Label htmlFor="email" className={'text-white mb-4 text-xl'}>What</Label>
                        <Input className={'bg-white py-7 focus:ring-blue-400'} type="email" id="email" placeholder="Enter Keywords" />
                    </div>
                    <div className='2xl:row-span-1 xl:row-span-1 row-span-2'>
                        <div className='flex-1 h-full flex flex-col'>
                            <Label htmlFor="email" className={'text-white mb-4 text-xl'}>Where</Label>
                            <div className='flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-2 xl:gap-2 gap-7 2xl:items-end xl:items-end'>
                                <Input className={'bg-white py-7'} type="email" id="email" placeholder="Enter suburb,region or city" />
                                <Button variant={''} type="submit" onClick={() => setOpen(true)} className={'text-white bg-[#FD0585] hover:text-white text-xl uppercase px-6 2xl:h-full xl:h-full h-fit 2xl:py-0 xl:py-0 py-4'}>Seek</Button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={`${!open && 'ml-auto'} w-fit pr-2 2xl:block xl:block hidden`}>
                    {
                        !open ? <Button type="button" onClick={() => setOpen(true)} variant={''} className={'text-sm w-fit bg-transparent hover:bg-blend-color'} ><span>More Options</span> <Settings /></Button>
                            : <div className='px-6 flex flex-row items-center gap-3'>
                                <DropDown list={work_types}>
                                    <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>{getWorkTypeLabel(selectedWorkTypes)}</span><ChevronDown />
                                    </Button>
                                </DropDown>
                                <DropDown list={job_location}>
                                    <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>{getJobTypeLabel(selectedJobTypes)}</span><ChevronDown /></Button>
                                </DropDown>
                                <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Pay</span><ChevronDown /></Button>
                                <DropDown list={classification}>
                                    <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Classification</span><ChevronDown /></Button>
                                </DropDown>
                                <DropDown list={time}>
                                    <Button variant={'outline'} className={`${montserrat.className} text-white border-2 border-white text-base font-light py-2 rounded-3xl`}><span>Listing Time</span><ChevronDown /></Button>
                                </DropDown>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
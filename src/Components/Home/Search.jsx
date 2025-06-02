import React from 'react';
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from '../ui/button';
import { Settings } from 'lucide-react';

const Search = () => {
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
                                <Button variant={''} className={'text-white bg-[#FD0585] hover:text-white text-xl uppercase px-6 h-full'}>Seek</Button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='ml-auto w-fit pr-2'><Button variant={''} className={'text-sm w-fit bg-transparent hover:bg-blend-color'} ><span>More Options</span> <Settings /></Button></div>
            </div>
        </div>
    );
};

export default Search;
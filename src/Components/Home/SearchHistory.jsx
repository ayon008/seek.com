import { History } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SearchHistory = () => {
    const history = [
        'All Jobs', 'Wordpress Developer', 'Web developer'
    ]
    return (
        <div className='flex items-center gap-3 overflow-x-auto'>
            {
                history.map((his, i) => {
                    return (
                        <Link key={i} className='flex bg-[#EBEFF2] px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300' href={`/jobs?pos=${i + 1}`}><History/> <span className='ml-2'>{his}</span></Link>
                    )
                })
            }
        </div>
    );
};

export default SearchHistory;
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const menuItems = [
        "Job search",
        "Profile",
        "Recommended jobs",
        "Saved searches",
        "Saved jobs",
        "Applied jobs",
        "Career advice",
        "Explore careers",
        "Explore salaries",
        "Explore companies"
    ];

    const employerMenuItems = [
        "Register for free",
        "Post a job ad",
        "Products & prices",
        "Customer service",
        "Hiring advice",
        "Market insights",
        "Recruitment software partners"
    ];

    const footerLinks = [
        "Register for free",
        "Post a job ad",
        "Products & prices",
        "Customer service",
        "Hiring advice",
        "Market insights",
        "Recruitment software partners",
        "About us",
        "About SEEK",
        "Newsroom",
        "Investors",
        "Careers",
        "International partners",
        "Partner services"
    ];
    const contactLinks = [
        "Contact",
        "Help centre",
        "Contact us",
        "Product & tech blog",
        "SEEK videos"
    ];

    return (
        <div className='max-w-[1280px] px-6 flex justify-between items-start'>
            <div className='flex-1'>
                <div className='flex flex-col justify-between gap-y-4'>
                    <h3 className='text-base font-semibold'>Job Seekers</h3>
                    {
                        menuItems.map((item, i) => {
                            return <Link className='text-sm text-primary' key={i} href={'/'}>{item}</Link>
                        })
                    }
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex flex-col justify-between gap-y-4'>
                    <h3 className='text-base font-semibold'>Employers</h3>
                    {
                        employerMenuItems.map((item, i) => {
                            return <Link className='text-sm text-primary' key={i} href={'/'}>{item}</Link>
                        })
                    }
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex flex-col justify-between gap-y-4'>
                    <h3 className='text-base font-semibold'>About Us</h3>
                    {
                        footerLinks.map((item, i) => {
                            return <Link className='text-sm text-primary' key={i} href={'/'}>{item}</Link>
                        })
                    }
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex flex-col justify-between gap-y-4'>
                    <h3 className='text-base font-semibold'>Contact</h3>
                    {
                        contactLinks.map((item, i) => {
                            return <Link className='text-sm text-primary' key={i} href={'/'}>{item}</Link>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;
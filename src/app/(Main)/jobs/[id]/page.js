import React from 'react';

const page = async ({ params }) => {
    const { id } = await params;
    console.log(id);


    return (
        <div className='min-h-96 p-6'>
            This is job details {id}
        </div>
    );
};

export default page;
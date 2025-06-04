import React from 'react';
import { Button } from "@/Components/ui/button"

const PrimaryButton = ({text}) => {
    return (
        <div>
            <Button variant="outline" className={'text-secondary border-secondary border-2 bg-white text-base'}>{text}</Button>
        </div>
    );
};

export default PrimaryButton;
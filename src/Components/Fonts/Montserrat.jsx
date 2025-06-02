import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // add the weights you need
    variable: '--font-montserrat',        // optional if using with Tailwind
    display: 'swap',
});
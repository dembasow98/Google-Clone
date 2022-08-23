import {useRouter} from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function PaginationButtons() {

    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;


    return (
        <div className="flex max-w-lg justify-between text-blue-700 mb-10 sm:ml-[5%] md:ml-[14%] lg:ml-52">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                        <p>Previous</p>
                        <ChevronLeftIcon className="h-5 w-5" />
                        
                    </div>
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                    <p>Next</p>
                    <ChevronRightIcon className="h-5 w-5" />
                </div>
            </Link>

           
        </div>
    );
}


        
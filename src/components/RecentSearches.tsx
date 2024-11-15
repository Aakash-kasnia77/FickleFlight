import React from 'react';
import DurationImg from '../Images/Duration.svg'
import HotelPic from '../Images/Hotel Icon.png'
import AttractionPic from '../Images/Attractions Icon.png'
import EatsPic from '../Images/Eats Icon.png'
import CommutePic from '../Images/Commute icon.png'
import TaxiPic from '../Images/Taxi Icon.png'
import MoviePic from '../Images/Movies icon.png'

type MyComponentProps = {
    // Define your props here
    //   title: string;
    //   children: string;
};

const RecentSearches: React.FC<MyComponentProps> = ({ }) => {
    return (
        <div className='ml-20'>
            <h1 className=' mt-10 mb-4 font-bold'>RECENT SEARCHES</h1>
            <div className='flex space-x-4 justify-center mr-20 mb-4'>
                <div className='border border-gray-300 rounded-lg p-4 w-1/2'>
                    <div className='flex w-auto text-blue-600 justify-between  font-bold  space-x-20'>
                        <h1>SIN</h1>
                        <img
                            src={DurationImg}
                            alt='none'
                        />
                        <h1>LAX</h1>
                    </div>
                    <div className='flex justify-center space-x-1 mt-2'>
                        <p className='font-bold'>
                            Depart on :
                        </p>
                        <p>
                            7 Sep 2024
                        </p>
                    </div>
                </div>
                <div className='border border-gray-300 rounded-lg p-4 w-1/2'>
                    <div className='flex w-auto text-blue-600 justify-between  font-bold  space-x-20'>
                        <h1>MY</h1>
                        <img
                            src={DurationImg}
                            alt='none'
                        />
                        <h1>DUB</h1>
                    </div>
                    <div className='flex justify-center space-x-1 mt-2'>
                        <p className='font-bold'>
                            Depart on :
                        </p>
                        <p>
                            9 Sep 2024
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-gray-400 mb-4'>PREPARE FOR YOUR TRIP</h1>
                <div className='flex justify-between mr-20'>
                    <div className='text-center space-y-2'>
                        <img src={HotelPic} />
                        <p className='text-gray-500'>Hotel</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <img src={AttractionPic} />
                        <p className='text-gray-500'>Attractions</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <img src={EatsPic} />
                        <p className='text-gray-500'>Eats</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <img src={CommutePic} />
                        <p className='text-gray-500'>Commute</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <img src={TaxiPic} />
                        <p className='text-gray-500'>Taxi</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <img src={MoviePic} />
                        <p className='text-gray-500'>Movie</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentSearches;

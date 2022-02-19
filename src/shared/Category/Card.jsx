import React from 'react';
import image_1 from '../../img/@Wallpapersbin1920x1080 (17).jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = (props) => {
    return (
        <div className='w-full hover:shadow-2xl transform hover:scale-75 transition duration-150'>
            <div className="relative flex justify-center items-center rounded-ld shadow">
                <LazyLoadImage src={image_1} 
                    className="w-full lg:h-20 h-[4.2rem] rounded-lg shadow object-cover" effect="opacity" width="100vh" alt="samasn" />
                <div className="absolute w-full h-full rounded-md inset bg-green-700 bg-opacity-70">
                    <div
                        className="flex w-full h-full text-center mx-auto justify-center items-center aviny text-white lg:text-xl text-lg font-base">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

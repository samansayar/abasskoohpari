import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImageViewer } from "react-image-viewer-dv"
const Cardservice = (props) => {
    return (
        <div className="relative lg:px-2 px-8 lg:px-2 h-[450px]">
            {/* <div className="py-2 px-2">
                <div className="flex justify-between items-center py-2">
                    <div className="relative mt-1 flex">
                        <div className="mr-2">
                            <LazyLoadImage src="https://avatars.githubusercontent.com/u/68494287?v=4" alt="saman sayyar"
                                className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <div className="mr-3 flex justify-start flex-col items-start">
                            <p className="text-green-900 text-sm">
                                عباس کوهپری
                            </p>
                            <p className="text-green-600 text-xs">
                                مدیر فضای سبز کوهپری
                            </p>
                        </div>
                    </div>
                    <button type="button" className="relative opacity-70 p-2 focus:outline-none border-none bg-gray-100 rounded-full">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div> */}
            <div className="relative w-full hover:bg-green-300 transition duration-300 rounded-lg hover:shadow-lg cursor-pointer">
                <ImageViewer>
                <LazyLoadImage effect='opacity' src={props.image} alt="abasskoohpari"
                    className="rounded-lg w-full object-cover" />
                </ImageViewer>
                <div className='relative w-10/12'>
                    <div className='absolute  rounded-l-xl shadow-sm blur-[2.3px] h-60 w-12/12 -inset-x-12 -top-20 p-20 px-2 bg-gradient-to-bl from-gray-200/80 via-green-200/80 to-green-600'></div>
                    <div className='z-50 flex flex-col relative w-full mt-0 mr-0 transform -translate-y-16'>
                        <div class="flex justify-between items-center w-full p-1">
                        <h2 className='text-2xl font-bold flex items-start text-green-900'>{props.titleFa}</h2>
                        <h2 className='text-md font-bold lowercase flex items-start text-green-900'>{props.titleEn}</h2>
                        </div>
                    <p className='text-sm w-full z-50 mt-2 py-2 pl-3 pr-2 h-40 leading-6 bg-gradient-to-bl to-transparent via-white from-gray-300 rounded-lg  bg-opacity-70'>
                        {props.description}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardservice;

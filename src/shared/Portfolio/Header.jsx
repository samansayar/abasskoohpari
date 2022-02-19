import React from 'react';
import { LazyLoadImage  } from 'react-lazy-load-image-component';
import { ImageViewer } from "react-image-viewer-dv"
const Header = ({ item }) => {
    return (
        <>
            <div className="flex justify-center items-center w-full px-2">
                <div className="lg:columns-5 columns-3 gap-x-4 gap-y-6 w-full h-full">
                    {item.map((Val) => {
                        return (
                            <div class="h-full relative">
                                <ImageViewer>

                                <LazyLoadImage
                                    className='rounded-md cursor-pointer shadow-md hover:shadow-xl trnasition duration-150 transform object-cover'
                                    alt="lazy load"
                                    src={Val.img}
                                    effect="opacity"
                                />
                                </ImageViewer>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default Header;

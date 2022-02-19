import React , {useState} from 'react';
import Data from "../Data";

const Item = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <button
                className={`cursor-pointer  flex-shrink-0 lg:text-md text-sm flex justify-center lg:w-2/12 w-4/12 items-center py-2 rounded-full h-12 text-white bg-indigo-700`}
                onClick={() => {
                    setItem(Data);
                }}>
                همه
            </button>
            {menuItems.map((Val, id) => {
                return (
                    <button
                        className={`cursor-pointer border border-gray-300 bg-gray-100 flex-shrink-0 lg:text-md text-sm flex justify-center lg:w-2/12 w-4/12 items-center py-2 rounded-full h-12 `}
                        onClick={() => {
                            filterItem(Val);
                        }}
                        key={id}
                    >
                        {Val}
                    </button>
                );
            })}

        </>
    );
}


export default Item;

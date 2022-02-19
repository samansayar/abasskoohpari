import React, { useState } from 'react';
import Data from "../Data";
import Header from './Header';
import Item from './Item';

const Section = () => {
    const [item, setItem] = useState(Data);
    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };
    return (
        <div className='w-full mx-auto flex justify-center flex-col items-center text-gray-900'>
            <div class="scroll_custom flex space-x-3 py-2 lg:pl-0 pl-2 w-full h-20 overflow-x-auto overflow-y-hidden">
                <div></div>
                <Item
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems} />
            </div>
            <div className='mt-2 text-gray-800'>
                <Header item={item} />
            </div>
        </div>
    );
}


export default Section;

import React from 'react';

const Blocklink = (props) => {
    return (
        <div>
            <a href={props.route} class="bg-white hover:scale-110 hover:rotate-0 w-[6rem] text-gray-600 text-sm lg:px-2 px-1 py-5 rounded-md hover:shadow-2xl transition duration-100 shadow-md flex justify-center items-center">
              <p>{props.title}</p>
            </a>
        </div>
    );
}

export default Blocklink;

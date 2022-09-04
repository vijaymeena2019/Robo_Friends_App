import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='serch'
                placeholder='Search Robots'
                onChange={searchChange}  // onchange in html, it is a event , we are just listening to "any time the input changes"
            />
        </div>
    )
}

export default SearchBox;


// // just trying to make search function in vanila js
// let input = document.querySelector('input');
// let text = input.textContent;
// input.addEventListener('keydown', function (event, { robots }) {
//     text = input.textContent;
//     let txlen = text.length - 1;
//     let newArray = robots.filter((robot) => {
//         return text === robot.name.slice(0, txlen);
//     })


// })

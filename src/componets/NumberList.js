import React from 'react';

function NumberList(props) {
    const numbers = props.numbers;
    if (!numbers) {
        console.log('the numbers is null');
        return null;
    }
    const listItems = numbers.map((number) => {
        return <li key={number.toString()}>{number}</li>;
    });

    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList;
import React from 'react';

// class DateShow extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: props.date }
//     }

//     render () {
//         return (
//             // date 没有按照定时器去更新时间 ？？
//             <h2>It is { this.state.date.toLocaleTimeString() }.</h2>        
//         );
//     }
// }

function DateShow(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default DateShow;
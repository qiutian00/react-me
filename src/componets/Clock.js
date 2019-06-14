import React from 'react';
import DateShow from './DateShow';

class Clock extends React.Component {
    constructor(props) {
        // super();
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        console.log('had setState');
    }

    render() {
        return (
            <div>
                <h1>Hello, the Clock haha!</h1>
                {/* <h2>It is {this.props.date.toLocaleTimeString()}. </h2> */}
                {/* <h2>It is { this.state.date.toLocaleTimeString() }. </h2> */}

                {/* 数据向下流动 */}
                <DateShow date={ this.state.date } />
            </div>
        );
    }
}

export default Clock;
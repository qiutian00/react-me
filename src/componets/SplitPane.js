import React from 'react';
// import './SplitPane.less';


class SplitPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='splitPane'>
                <div className='half'>
                    {this.props.left}
                </div>
                <div className='half'>
                    {this.props.right}
                </div>
            </div>
        );
    }
}

export default SplitPane;
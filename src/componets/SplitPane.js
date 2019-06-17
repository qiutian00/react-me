import React from 'react';
import styles from './SplitPane.less';

class SplitPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.SplitPane}>
                <div className={styles.half}>
                    {this.props.left}
                </div>
                <div className={styles.half}>
                    {this.props.right}
                </div>
            </div>
        );
    }
}

export default SplitPane;
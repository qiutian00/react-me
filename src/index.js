import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './componets/Comment.js';
import Clock from './componets/Clock';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const element = (
    <h1 className='greeting'>
        hello, the world!
    </h1>
);
const element2 = React.createElement(
    'h1',
    {className: 'greeting'},
    <App/>
);
const element3 = React.createElement(
    'h1',
    {className: 'greeting'},
    React.createElement(
        'h2',
        {className: 'h2Class'},
        'this is good for me'
    )
);
const element4 = React.createElement(
    'div',
    {className: 'element4Class'},
    'go go ...'
)

// 直接dom标签组件， 可以不用括号的
const element5 = 
    <h1 className='greeting'>
        hello, element5!
    </h1>;

function Welcome(props) {
    console.log('Welcome Component')
    return <h1>Hello, {props.name} on {props.currentTime}</h1>
}
const element6 = <Welcome name='liwen' currentTime={ new Date().toLocaleDateString() } />;

// 组合组件1
const element7 = <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" currentTime={ new Date().toLocaleTimeString() } />
    <Welcome name="Edite" />
</div>
// 组合组件2
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
const elementComponet2 = <Comment date={comment.date} text={comment.text} author={comment.author} />

// ReactDOM.render(elementComponet2, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

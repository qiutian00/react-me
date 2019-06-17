import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './componets/Comment.js';
import Clock from './componets/Clock';
import Toggle from './componets/Toggle';
import LoginControl from './componets/LoginControl';
import NumberList from './componets/NumberList';
import NumberList2 from './componets/NumberList2';
import * as serviceWorker from './serviceWorker';
import Mailbox from './componets/Mailbox';
import Calculator from './componets/Calculator';
import SplitPane from './componets/SplitPane';
import Contacts from './componets/Contacts';
import Chat from './componets/Chat';
import SignUpDialog from './componets/SignUpDialog';
import AppRouter from './router/AppRouter';
import AppRouter2 from './router/AppRouter2';
import BasicExample from './router/BasicExample';
import ParamsExample from './router/ParamsExample';

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

const messages = ['React', 'Hello', 'Ni Hao', 'Win'];

const numbers = [1, 2, 3, 4, 5, 9, 6];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

// ReactDOM.render(elementComponet2, document.getElementById('root'));
// ReactDOM.render(<Clock />, document.getElementById('root'));
// ReactDOM.render(<Mailbox  unreadMessages={messages}/>, document.getElementById('root'));
// ReactDOM.render(listItems, document.getElementById('root'));
// ReactDOM.render(<NumberList2 numbers={numbers} />, document.getElementById('root'));
// ReactDOM.render(<Calculator />, document.getElementById('root'));
// ReactDOM.render(<SplitPane left={<Contacts/>} right={<Chat/>} />, document.getElementById('root'));
// ReactDOM.render(<SignUpDialog title='Earth Exploration Program' message='please login in ... ' />, document.getElementById('root'));// If you want your app to work offline and load faster, you can change
ReactDOM.render(<ParamsExample />, document.getElementById('root'));// If you want your app to work offline and load faster, you can change


// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

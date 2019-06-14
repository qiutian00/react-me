import React from 'react';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
        <h1>Hello!</h1>
        { unreadMessages &&  unreadMessages.length > 0 &&
            <h2>
            You have {unreadMessages.join(',')} unread messages.
            </h2>
        }
        </div>
    );
}

export default Mailbox;
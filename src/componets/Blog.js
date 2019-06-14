import React from 'react';

function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts
                &&
                props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )
            }
        </ul>
    );
    let content;
    if (props.post) {
        content = props.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
       );
    } else {
        content = (<div>无内容</div>);
    }

    return (
        <div>
            {sidebar}
            <br/>
            {content}
        </div>
    );
}

export default Blog;
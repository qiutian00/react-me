import React from 'react';

function ListItem(props) {
    const value = props.value;
    return (
      // 错误！你不需要在这里指定 key：
      <li key={value.toString()}>
        {value}
      </li>
    );
}

export default ListItem;
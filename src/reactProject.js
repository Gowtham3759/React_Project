import React from 'react';
export default function List(props) {
  const { myList } = props;
  const listItems = myList.map((item) => (
    <li key={item.id}>{item.value}</li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
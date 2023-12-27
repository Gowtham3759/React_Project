import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './reactProject';
export default function App() {
  const myList = [
  { id: 'a', value: 'apple' },
  { id: 'b', value: 'banana' },
  { id: 'c', value: 'orange' },
  { id: 'd', value: 'grapes' },
  { id: 'e', value: 'mango' },
  ];
  return (
    <div className="App">
        <List myList={myList}/>
    </div>
  );
}
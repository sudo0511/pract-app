import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(root);
const ele = React.createElement('h1', {id:'heading'}, 'Hello React and Sudo 😂!!!');
console.log(ele);

root.render(ele)
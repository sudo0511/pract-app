const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(root);
const ele = React.createElement('h1', {id:'heading'}, 'Hello React!!!');
console.log(ele);

root.render(ele)
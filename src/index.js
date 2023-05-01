import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/MyeventsApp';
import './events.css';
// single return 
// const root=ReactDOM.createRoot(document.getElementById("demo-app-events"));
// root.render(<h1>Hi My events are just Loading</h1>);
const root=ReactDOM.createRoot(document.getElementById("demo-app-events"));
root.render(<App />);



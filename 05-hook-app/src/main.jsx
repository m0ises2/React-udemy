import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from "./HooksApp";
import './index.css';
import { Layout } from './05-useLayoutEffect/Layout';
// import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

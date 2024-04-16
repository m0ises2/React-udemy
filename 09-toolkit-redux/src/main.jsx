import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokemonApp } from './PokemonApp.jsx';
import { TodoApp } from './TodoApp.jsx';
import { store } from './store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>,
)

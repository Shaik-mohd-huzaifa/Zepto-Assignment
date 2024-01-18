import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from "./Context/user.context";
import { UserListVisibilityProvider } from "./Context/list.context";
import { SelectedListProvider } from "./Context/Selected.context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <UserListVisibilityProvider>
        <SelectedListProvider>
          <App />
        </SelectedListProvider>
      </UserListVisibilityProvider>
    </UserContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

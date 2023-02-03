import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import bootstrap5 from "bootstrap5/src/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "./Store";
import Home from "./Crud/component/Home";
import Form from "./Crud/component/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            {/* <App /> */}
            <Home />
            {/* <Form /> */}
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

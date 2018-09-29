import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import 

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
   document.querySelector("#root")
 );

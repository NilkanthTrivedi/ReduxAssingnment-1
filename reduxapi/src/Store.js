import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import rootReducer from "./Crud/Reducer/rootreducer";

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;

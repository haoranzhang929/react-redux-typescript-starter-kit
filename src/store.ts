import { createStore, compose } from "redux";
import rootReducer from "./reducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // to enable redux dev tool

export default createStore(rootReducer, composeEnhancers());

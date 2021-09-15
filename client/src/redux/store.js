// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducer";
// import thunk from "redux-thunk";

// const store = createStore(reducers, applyMiddleware(thunk));

// export default store;

// el store conecta todos los componentes de react con la store
// setear para visibilizar en consola

import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;

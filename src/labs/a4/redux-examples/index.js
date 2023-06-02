import { Provider } from "react-redux";
import hello from "./reducers/hello";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import { configureStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component";

const store = configureStore({ reducer: { hello, todos } });
function ReduxExamples() {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <Todos />
        <HelloReduxExampleComponent />
      </div>
    </Provider>
  );
}

export default ReduxExamples;

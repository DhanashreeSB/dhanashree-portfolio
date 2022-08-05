import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { InversifyProvider } from "./hooks/InversifyProvider";
import container from "./container/InversifyContainer";
import { RootStoreI } from "./store/RootStore";
import { SERVICE_IDENTIFIER } from "./constants/InversifyConstants";
import {Provider} from 'mobx-react'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const rootStore: RootStoreI = container.get(SERVICE_IDENTIFIER.STATE_SERVICE)

root.render(
  // <React.StrictMode>
  <InversifyProvider container={container}>
    <Provider {...rootStore}>
    <App />
    </Provider>
  </InversifyProvider>
  // </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

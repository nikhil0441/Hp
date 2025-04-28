import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import store from "./store.jsx"; // import store from the store file
import { Provider } from "react-redux"; // import Provider from react-redux

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

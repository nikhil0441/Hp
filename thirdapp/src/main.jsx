import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserContext from "./UserContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <UserContext>
    <App />
  </UserContext>
);

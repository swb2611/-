import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import MainPage from "./routes/main-page";
import SelectionPage from "./routes/selection-page";
import ResultPage from "./routes/result-page";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "selection",
    element: <SelectionPage />,
  },
  {
    path: "result",
    element: <ResultPage />,
  },
]);

root.render(<RouterProvider router={router} />);

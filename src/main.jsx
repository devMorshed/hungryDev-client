import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Routes/Layout";
import './index.css'
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}></RouterProvider>
);

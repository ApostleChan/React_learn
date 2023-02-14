import React from "react";
import PostList from "./PostList";
import {createRoot} from "react-dom/client";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<PostList/>)
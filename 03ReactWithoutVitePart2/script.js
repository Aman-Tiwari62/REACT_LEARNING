import react from 'react';
import reactDOM from "react-dom/client";
const root = reactDOM.createRoot(document.getElementById('root'));
const element = react.createElement(
    'h1',
    null,
    "Hello Aman Tiwari"
)
root.render(element);
# React2

## Why the page is blank

The page does not show the text "Hello Aman Tiwari" because this project is using React code, but it is being opened directly with Live Server without the proper React setup.

In this project:
- [index.html](index.html) contains a root element with the id `root`.
- [script.js](script.js) tries to render React content into that element.

However, the browser cannot run the React code correctly in this simple setup unless the project is served with the proper React environment or the script is adjusted to work in a browser-friendly way.

## What should be done

To make the heading appear, one of these approaches should be used:

1. Use a proper React project setup with a bundler such as Vite or Create React App.
2. Load React from a CDN in [index.html](index.html) and use the browser-compatible ReactDOM API in [script.js](script.js).
3. Run the app through a proper development environment instead of opening the file directly.

## Expected result

Once the React setup is corrected, the page should display:

Hello Aman Tiwari

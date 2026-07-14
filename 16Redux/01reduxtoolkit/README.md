# Redux Toolkit Example

This project demonstrates how to set up and use Redux Toolkit with a React application.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Redux Toolkit and React Redux if they are not already installed:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/redux/store.js` — Redux store configuration
- `src/features/counter/counterSlice.js` — Redux Toolkit slice for the counter feature
- `src/main.jsx` — React app entry point and provider setup
- `src/App.jsx` — Main application component
- `src/components/Display.jsx` — Example component that reads state from the store
- `src/components/Button.jsx` — Example component that dispatches actions

## Redux Toolkit Usage

1. Create a slice in `src/features/counter/counterSlice.js`:
   - Use `createSlice()` to define state, reducers, and actions
   - Export the generated reducer and actions

2. Configure the store in `src/redux/store.js`:
   - Use `configureStore()` from Redux Toolkit
   - Add your slice reducer to the `reducer` object

3. Provide the store to React in `src/main.jsx`:
   - Wrap the app with `<Provider store={store}>`
   - Export the `store` from `src/redux/store.js`

4. Use state and actions in components:
   - Use `useSelector()` to read state from the store
   - Use `useDispatch()` to dispatch actions

## Example Commands

- `npm install` — install dependencies
- `npm run dev` — run the Vite development server

## Notes

- Redux Toolkit simplifies Redux setup by providing `configureStore`, `createSlice`, and good default middleware.
- Keep feature logic inside slices and interact with state via hooks in your components.


import * as React from "react";
import { useRoutes } from "react-router-dom";
import routes from './router/routes'

export default function App() {
  let element = useRoutes(routes);
  console.log('===element===', element)
  // use BrowserRouter
  return (
    <>
      {element}
    </>
  );
}
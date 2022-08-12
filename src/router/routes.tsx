import React from 'react';
import type { RouteObject } from "react-router-dom";
import Layout from './Layout'
import Home from '../Pages/Home'
import ErrorPage from '../Pages/ErrorPage'
import GlassFrame from "../Pages/GlassFrame"
import Question from '../Pages/Question';
import Location from '../Pages/Loaction'
import LocationDetail from '../Pages/Loaction/LocationDetail';
import Blog from '../Pages/Blog'
const host = process.env.REACT_APP_PATH

const routes: RouteObject[] = [
  {
    path: `${host}/`,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: `${host}/classFrame`, element: <GlassFrame /> },
      { path: `${host}/location`, element: <Location />, },
      { path: `${host}/location/detail`, element: <LocationDetail /> },
      { path: `${host}/question`, element: <Question /> },
      { path: `${host}/blog`, element: <Blog /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

export default routes
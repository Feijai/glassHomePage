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

const routes: RouteObject[] = [
  {
    path: "/glassHomePage",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/glassHomePage/classFrame", element: <GlassFrame /> },
      { path: '/glassHomePage/location', element: <Location />, },
      { path: "/glassHomePage/location/detail", element: <LocationDetail /> },
      { path: '/glassHomePage/question', element: <Question /> },
      { path: '/glassHomePage/blog', element: <Blog /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

export default routes
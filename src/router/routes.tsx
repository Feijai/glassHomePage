import React from 'react';
import type { RouteObject } from "react-router-dom";
import Layout from './Layout'
import Home from '../Pages/Home'
import ErrorPage from '../Pages/ErrorPage'
import GlassFrame from "../Pages/GlassFrame"
import Question from '../Pages/Question';
import Location from '../Pages/Loaction'
import LocationDetail from '../Pages/Loaction/LocationDetail';

const routes: RouteObject[] = [
  {
    path: "/glassHomePage",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/glassHomePage/classFrame", element: <GlassFrame /> },
      // {
      //   path: "/courses",
      //   element: <Courses />,
      //   children: [
      //     { index: true, element: <CoursesIndex /> },
      //     { path: "/courses/:id", element: <Course /> },
      //   ],
      // },
      {
        path: '/glassHomePage/location', element: <Location />,
        children: [
          { index: true, element: <Location /> },
          { path: "/glassHomePage/location/detail", element: <LocationDetail /> },
        ],
      },

      { path: '/glassHomePage/question', element: <Question /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

export default routes
import React from 'react';
import type { RouteObject } from "react-router-dom";
import Layout from './Layout'
import Home from '../Pages/Home'
import ErrorPage from '../Pages/ErrorPage'
import GlassFrame from "../Pages/GlassFrame"

const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {path:"/classFrame", element:<GlassFrame />  },
        // {
        //   path: "/courses",
        //   element: <Courses />,
        //   children: [
        //     { index: true, element: <CoursesIndex /> },
        //     { path: "/courses/:id", element: <Course /> },
        //   ],
        // },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];

  export default routes
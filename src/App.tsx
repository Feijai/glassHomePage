import * as React from "react";
import { Route, Routes } from "react-router-dom";
import routes from './router/routes'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import GlassFrame from "./Pages/GlassFrame"
import Question from './Pages/Question';
import Location from './Pages/Loaction'
import LocationDetail from './Pages/Loaction/LocationDetail';
import Blog from './Pages/Blog'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/classFrame" element={< GlassFrame />} />
        <Route path="/location" element={< Location />} />
        <Route path="/location/detail" element={< LocationDetail />} />
        <Route path="/blog" element={< Blog />} />
        <Route path="/question" element={< Question />} />
        <Route path="/*" element={< ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}
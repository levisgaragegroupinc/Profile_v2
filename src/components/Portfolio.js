import React, { useState } from "react";
import NavBar from "./Navbar";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Footer from "./Footer";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Projects");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Projects />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default Portfolio;

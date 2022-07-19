import React, { useState } from "react";
import NavBar from "./Navbar";
import Projects from "./Projects/Projects";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

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
    </>
  );
}

export default Portfolio;

import React from "react";
import LandingPages from "../Components/LandingPages";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer/Footer";
import HeroProjects from "../Components/HeroProjects";
import Another from "../Components/Another";

const Projects = () => {
    return(
        <div>
            <Navbar />

            <section>
                <LandingPages />
            </section>

            <section>
                <HeroProjects />
            </section>

            <section>
                <Another />
            </section>

            <Footer />
        </div>
    )
}

export default Projects;
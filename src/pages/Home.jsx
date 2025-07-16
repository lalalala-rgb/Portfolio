import "../styles/Homepage.css";
import Intro from "../component/Intro";
import Project from "../component/Project";

import About from "../component/About";

const Home = () => {
  return (
    <>
      <Intro />
      <Project />
      <About />
      <footer>
        &copy; {new Date().getFullYear()} Louise David S. Lirio &mdash; All
        rights reserved.
      </footer>
    </>
  );
};

export default Home;

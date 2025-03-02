import Navbar from "./component/navbar";
import Header from "./component/header";
import AboutMe from "./component/aboutme";
import Skill from "./component/skill";
import Experience from "./component/experience";
import Project from "./component/project";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-5 ">
        <Navbar />
        <Header />
        <AboutMe />
        <Skill />
        <Experience />
        <Project />
      </div>
    </>
  );
}

import Nav from "../nav/nav";
import Header from "../../components/coursesPage/header";
import SectionCard from "../../components/coursesPage/courseSection/sectionCard";

const Courses = () => {
  return (
    <div>
      <Nav />
      <Header />
      <SectionCard />
      <br />
      <SectionCard />
      <br />
      <SectionCard />
    </div>
  );
};

export default Courses;

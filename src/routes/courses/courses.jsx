import Nav from "../nav/nav";
import Header from "../../components/coursesPage/header";
import SectionCard from "../../components/coursesPage/courseSection/sectionCard";
import courseDetails from "../../Courses";



const Courses = () => {
  return (
    <div>
      <Nav />
      <Header />
      {/* added some prop drilling so i could reuse your components */}
      {courseDetails.map((courseDetail) => (
        <SectionCard
          spanTitle={courseDetail.header.section }
          title={courseDetail.header.title }
          paragraph={courseDetail.header.text}
          courses={courseDetail.courses }
        />
      ))}
    </div>
  );
};

export default Courses;

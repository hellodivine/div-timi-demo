import CourseHeader from "./courseHeader";
import CourseCard from "./courseCard";


{/* added some prop drilling so i could reuse your components */}
const sectionCard = ({spanTitle,title,paragraph,courses}) => {
  return (
    <div className="flex flex-col">
      <CourseHeader
        spanTitle={spanTitle}
        title={title}
        paragraph={paragraph}
      />

      <CourseCard
        courses={courses}
      />
    </div>
  );
};

export default sectionCard;

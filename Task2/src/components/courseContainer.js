import Image from "./images/course-card.png"
export default function CourseContainer() {
  return (
    <div className="course-card">
      <img src={Image}></img>
      <div className="text-h">UI/UX Designing Course</div>
      <div className="text-m">Rs. 699</div>
    </div>
  )
}

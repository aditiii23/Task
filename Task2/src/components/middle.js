import CourseContainer from "./courseContainer"
import Delete1 from "./images/Delete1.png"
export default function Middle() {
  return (
    <div className="middle-container">
      <div className="text-heading">Design Courses</div>
      <div className="text-middle">Courses to get you started</div>
      <div className="courses-container">
        <div className="query-container">
          <h2>Filter</h2>
          <div className="filter-box">
            <div className="design-box">
              <div className="design">
                Design
                <img src={Delete1} />
              </div>
            </div>
          </div>
          <div className="query-list">
            Topic
            <div></div>
            <div className="options">
              <label>
                {" "}
                <input type="checkbox" /> Beginner
              </label>
              <label>
                {" "}
                <input type="checkbox" /> Intermediate
              </label>
              <label>
                {" "}
                <input type="checkbox" /> Advanced
              </label>
              <label>
                {" "}
                <input type="checkbox" /> All of the above
              </label>
            </div>
            Price
            <div className="options">
              <label>
                {" "}
                <input type="checkbox" /> 499-1000
              </label>
              <label>
                {" "}
                <input type="checkbox" /> 1000-1500
              </label>
              <label>
                {" "}
                <input type="checkbox" /> 499-1000
              </label>
              <label>
                {" "}
                <input type="checkbox" /> 1000-1500
              </label>
            </div>
          </div>
        </div>
        <div className="result-container">
          {[1, 2, 3, 4, 5, 6].map((elem) => {
            return <CourseContainer />
          })}
        </div>
      </div>
      <div className="text-middle">Advance your career with new skill</div>
    </div>
  )
}

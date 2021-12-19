import Image from "./images/course-card.png"
import leftClick from "./images/LeftClick.png"
import rightClick from "./images/RightClick.png"
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="arrow-left">
        <img src={leftClick} />
      </div>
      <div className="product-img">
        <img src={Image}></img>
      </div>
      <div className="product-description" style={{ padding: 40 }}>
        <h1>Course Description</h1>
        <br></br>
        <div className="product-desciption2">
          Lorem ipsum is the dummy text used tokdkdi kdolll kolk yundjkdi
          idkdldie dkdldiek idiekm in the nrooot .
        </div>
        <br></br>
        <div className="price">Rs. 699</div>
      </div>
      <div className="arrow-right">
        <img src={rightClick} />
      </div>
    </div>
  )
}

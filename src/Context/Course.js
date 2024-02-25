import StarRating from "../Context/StarRating"
import pr1 from "../Components/Assests/pr1.png";


function course({ title, mentor, rating, img, price, salePrice }) {
  return (
    <div className="course">
      <img src={pr1} alt="" className="w-100" />
      <div className="course-body">
        <h4>{title}</h4>
        <div className="mentor_rating_div">
         <p>{mentor}</p>
         <StarRating defaultRating={rating} size={15} color="#000000" />
         <span  style={{"color":"#808080"}}>({rating})</span>
        </div>
        <div className="price">
          <span style={{ "text-decoration": "underline" , "color":"#090C9B","font-weight": "bold" }}> {salePrice ? salePrice : price} </span>
          {salePrice && (
            <span style={{ "text-decoration": "line-through" , "color":"#090C9B87" }}> {price}</span>
          )}
        </div>
        <a href="viewcourse" className="view-course-link">View Course </a>
      </div>
    </div>
  );
}

export default course;
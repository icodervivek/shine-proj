import React from "react";
import Book from "../assets/book.svg";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row m-5 text-center">
        <div className="col-md-6">
          <img src={Book} className="book_svg" alt="" draggable="false" />
        </div>
        <div className="col-md-6 m-auto desc_section text-white">
          <h1>Shine International School, Jamudag</h1>
          <p>
            Shine International School was established in xxxx with a handful of
            Students and Teachers. But as the time goes on the capacity of
            School has grown to x Students with x Teachers. The School has been
            getting a rapid evolution in its own directions and the School has
            now been flourishing towards its goal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

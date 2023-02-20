import React from "react";
import img1 from "../../../Image/slider-blog-thumb-1.jpg";
import img2 from "../../../Image/slider-blog-thumb-2.jpg";
import img3 from "../../../Image/slider-blog-thumb-3.jpg";
const LatestNews = () => {
  return (
    <div>
      <h1 className="mt-2">OUR LATEST NEWS</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-3 m-3">
        <div class="col">
          <div class="card h-80">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className=" text-start text-muted">
                <small>January 23, 09:14 AM</small>
              </p>
              <h5 class="card-title text-start">We bring you the best</h5>
              <p class="card-text text-start">
                Aldi has relaunched its sell-out $5.99 perfume dupes of designer
                scents.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className=" text-start text-muted">
                <small>January 23, 09:14 AM</small>
              </p>
              <h5 class="card-title text-start">We know that buying Items</h5>
              <p class="card-text text-start">
                This is one of the brand's original creation and is a
                best-seller for good reason.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80">
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className=" text-start text-muted">
                <small>January 23, 09:14 AM</small>
              </p>
              <h5 class="card-title text-start">We design functional Items</h5>
              <p class="card-text text-start">
                This sparkling scent sing with citrus notes of mandarin and
                Californian lemon, which are prized for their mood-boosting
                effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

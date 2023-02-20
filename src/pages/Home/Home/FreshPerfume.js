import React from "react";
import pic1 from "../../../Image/pic1.png";
import pic2 from "../../../Image/pic2.png";
import pic3 from "../../../Image/pic3.png";
import pic4 from "../../../Image/pic4.jpg";
const FreshPerfume = () => {
  return (
    <div>
      <h1 className="mt-2">FRAGRANCE TYPES</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4 p-3 m-3">
        <div class="col">
          <div class="card h-80">
            <img src={pic1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className=" text-start text-muted"></p>
              <h5 class="card-title text-start">Pomegranate Perfume</h5>
              <p class="card-text text-start">
                The scent of pomegranate is subtle,twisting the green powdery
                fragrance of its skin around the sweet-tart.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80">
            <img src={pic2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className=" text-start text-muted"></p>
              <h5 class="card-title text-start">Pineapple Perfume </h5>
              <p class="card-text text-start">
                Pineapple is a naturally sweet fruit, but it has a sharpness to
                it too, which is why it works so well in fragrance.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80">
            <img src={pic3} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className=" text-start text-muted"></p>
              <h5 class="card-title text-start">Hibiscus Perfume</h5>
              <p class="card-text text-start">
                The Scent. A sweet and exotic floral that conjures visions of a
                tropical paradise.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80">
            <img src={pic4} class="card-img-top" alt="..." />
            <div class="card-body">
              <p className=" text-start text-muted"></p>
              <h5 class="card-title text-start">Papaya Perfume</h5>
              <p class="card-text text-start">
                Papaya Paradise by Skylar is a Floral Fruity fragrance for
                women. This is a new fragrance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshPerfume;

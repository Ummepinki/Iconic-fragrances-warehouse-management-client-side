import React from "react";
import item1 from "../../../Image/item-instagram-1.jpg";
import item2 from "../../../Image/item-instagram-2.jpg";
import item3 from "../../../Image/item-instagram-3.jpg";
const InstragramImage = () => {
  return (
    <div>
      <div>
        <h1 className="mt-2">INSTAGRAM IMAGE</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4 p-3 m-3">
          <div class="col">
            <div class=" h-80">
              <img src={item1} class="card-img-top " alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-80">
              <img src={item2} class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-80">
              <img src={item3} class="card-img-top " alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-80">
              <img src={item2} class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstragramImage;

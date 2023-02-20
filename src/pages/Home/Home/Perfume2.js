import React from "react";
import perfume2 from "../../../Image/perfume2.jpg";
import "./Perfume2.css";
const Perfume2 = () => {
  return (
    <div>
      <section>
        <div className="mx-auto d-flex  w-75 gap-5 mt-5">
          <div>
            <h1 className=" text-3xl uppercase font-bold">TOP PERFUME</h1>
            <br />
            <p>
              Write your own story with our perfumes! Satisfied clients and
              perfect customer service are our main rules, so leave your
              hesitations behind and let’s start shopping!You must tell original
              story that will give your perfumes enough charm to attract
              customers. So we are here to tell you many interesting stories
              with charming aroma.
            </p>
          </div>
          <div>
            <img src={perfume2} alt=""></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Perfume2;

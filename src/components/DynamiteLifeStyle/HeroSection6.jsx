import React from "react";

const successStories = [
  {
    name: "Brent Carter",
    achievement: "Within 2 years we now earn 200k working Monday to Friday!",
  },
  {
    name: "Tara Jamison",
    achievement:
      "352% increase in sales quadrupling my income in less than a week!",
  },
  {
    name: "Lorraine Burnell",
    achievement: "My quarterly target hitting 2.8M, 800k over my target!",
  },
];
const HeroSection6 = () => {
  return (
    <div className="hero-section-6">
      <div className="content d-center-col gap-5">
        <div className="header d-center-col">
          <h3>Proof it works</h3>

          <h2 className="text-center">Don't just take our word for it...</h2>
        </div>

        <div className="container-fluid cards ">
          <div className="row row-cols-1 row-cols-md-3 g-2">
            {successStories.map((item, index) => (
              <div className="col ">
                <div className="card d-center-col h-100 ">
                  <p className="mb-0 text-center">
                    {item.achievement}
                  </p>
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection6;

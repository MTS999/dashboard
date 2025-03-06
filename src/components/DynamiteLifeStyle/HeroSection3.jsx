import React from "react";
import DoneIcon from "@mui/icons-material/Done";
const topics = [
  "How high-achieving professionals set goals",
  "The goal-setting process I used to go from £4.20 to over 8-figures in business",
  "How to grow from a founder to a CEO",
  "How to increase your productivity and profit",
  "How professionals retrain their mind to remove limiting beliefs",
  "Increase your effectiveness to have more time",
  "How to make the #1 internal shift that increases sales",
  "How to eliminate imposter syndrome for good",
  "Increase your income by learning how to stand out within your industry",
];
const HeroSection3 = () => {
  return (
    <div className="hero-section-3 d-center-col">
      <div className="d-center-col header">
        <h3>How to</h3>
        <h2 className="mb-0 text-center">Leverage your time and lead in your field</h2>
        <p>
          What worked last year, won’t work this year, which is why most feel
          stationary, stuck at a crossroads, or maybe you feel like you’re going
          in reverse from your goal...
        </p>
        <span>
          However, you can decide now to commit to winning. Here's what you'll
          learn...
        </span>
      </div>

      <div className="container p-0  cards">
        <div className="row row-cols-1 row-cols-md-3 p-0 m-0">
          {topics.map((topic, index) => (
            <div className="col p-1">
              <div className="card d-flex align-items-center flex-row justi rounded-4 ">
                <div className="card-icon">
                  <DoneIcon />
                </div>
                <div>
                  <p className="mb-0 text-start">
                    How high-achieving professionals set goals
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;

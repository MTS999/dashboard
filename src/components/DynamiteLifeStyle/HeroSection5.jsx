import React from "react";
import { fear } from "../../assets";
const benefits = [
  {
    title: "Access to The Source",
    description:
      "Unlock our exclusive fully-loaded platform for personal development.",
  },
  {
    title: "Real-time Accountability",
    description:
      "Access to a Dynamite Lifestyle Associate who supports and guides you.",
  },
  {
    title: "Live Q&A with Kim Calvert",
    description: "An opportunity to engage with Kim and ask your questions.",
  },
  {
    title: "2x Exclusive Bonuses",
    description: "Access to the Sales Mastery Money Mindset Masterclasses.",
  },
  {
    title: "30 Day Replay Access",
    description: "Review sessions anytime with a full month of replays.",
  },
  {
    title: "Live-Lazer Implementation Sessions",
    description:
      "Gain access to sessions designed to help you put what you've learned into action.",
  },
  {
    title: "The Desire Session",
    description:
      "Instant access to the Desire session from The Executive Suite.",
  },
  {
    title: "Ideas to Income Mastermind",
    description: "Gain access to our exclusive Ideas to Income Mastermind.",
  },
];

const HeroSection5 = () => {
  return (
    <div className="hero-section-5">
      <div className="d-center-col gap-4">
        <div className="d-center-col header ">
          <h3>RECEIVE 8 BOUNCES</h3>
          <h2 className="text-center">
            You won't just explode in business, you will reinvent yourself!
          </h2>

          <p className="text-center">
            You won't just explode in business, you will reinvent yourself!
          </p>
        </div>
        <div className="container-fluid cards">
          <div className="row row-cols-1 row-cols-md-4">
            {benefits.map((item, index) => (
              <div className="col p-1">
                <div className="card d-center-col p-4 h-100">
                      <div >
                    <img className="rounded-3" src={fear} alt=" fear" />
                  </div>
                  <h4 className="text-center mb-0">{item.title}</h4>
                  <p className="mb-0 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection5;

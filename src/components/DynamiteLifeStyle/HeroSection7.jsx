import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const gpsOffers = [
  {
    title: "The Entrepreneurial GPS Code",
    originalPrice: "£297",
    discountedPrice: "£47",
    features: [
      "Access to The GPS 10-Day quest",
      "30-Day replay access",
      "Access to Live Lazer Implementation Sessions",
      "Real-time accountability",
      "Access to our exclusive community",
    ],
    bonuses: [
      "A LIVE Q&A session with Kim Calvert",
      "Access to The Source platform!",
      "Money Mindset masterclass",
      "Sales Mastery masterclass",
      "Exclusive recorded session with Bob Proctor",
      "Live mastermind of Ideas To Income",
    ],
  },
  // {
  //   title: "The Advanced GPS Program",
  //   originalPrice: "£497",
  //   discountedPrice: "£97",
  //   features: [
  //     "Access to The Advanced GPS 30-Day quest",
  //     "60-Day replay access",
  //     "Access to Weekly Live Implementation Sessions",
  //     "1-on-1 mentorship",
  //     "Access to VIP mastermind community",
  //   ],
  //   bonuses: [
  //     "Private coaching session with Kim Calvert",
  //     "Exclusive access to The Source+ platform!",
  //     "Advanced Sales & Mindset masterclasses",
  //     "High-Ticket Sales Mastery",
  //     "Recorded session with Bob Proctor & Kim Calvert",
  //     "Live mastermind of High-Performance Income Strategies",
  //   ],
  // },
];

const HeroSection7 = () => {
  return (
    <div className="hero-section-7">
      <div className="content d-center-col gap-5">
        <div className="header d-center-col">
          <h3>You can learn how to</h3>

          <h2 className="text-center">
            Accelerate To Success Personally and Professionally
          </h2>
        </div>
        <div className="">
          {gpsOffers.map((item, index) => (
            <div className=" d-center-col card align-items-start rounded-4">
              <h4 className="mb-0">
                {item.title} {item.originalPrice}
              </h4>

              <h2 className="">Only {item.discountedPrice} if you act now!</h2>
              <ul className="d-center-col align-items-start gap-4">
                {item.features.map((feature, index) => (
                  <li key={index}>
                    <span className="me-3 icon">
                      <DoneIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="d-center-col align-items-start gap-4">
                {item.bonuses.map((feature, index) => (
                  <li key={index}>
                    <span className="me-3 icon">
                      <DoneIcon />
                    </span>
                    <span>
                      Bonus: &nbsp;
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="hero-buttons theme--button p-2  rounded-3 w-100">
                Register now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection7;

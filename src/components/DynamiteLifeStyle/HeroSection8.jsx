import React from "react";

const faqData = [
  {
    question: "Who is this for?",
    answer:
      "If you’re still reading, then it’s for you! It is for anyone who wants to achieve more from life in all areas, especially income. You may be an employee wanting to excel to a new promotion or start a passive income on the side or better yet, go out and start something of your own, you're just not sure where or how to start. Or you may already be in business and are sick and tired of using the same failed methods, getting no further along and having less time. You want to break through that financial ceiling and start creating more time and financial freedom, so you can focus back ON your business, rather than IN it, isn’t that why you became an entrepreneur in the first place? This is for anyone who is ready to raise their game and WIN.",
  },
  {
    question: "I've done mindset work before. I'm still stuck.",
    answer:
      "What we teach is the science behind results. That’s why our students understand HOW their results are created and a proven system that creates permanent change and a repeatable code that works every time; they know how to overcome any obstacles.",
  },
  {
    question: "How is this different from other resources out there?",
    answer:
      "Unlike other events, this quest is explicitly aimed at entrepreneurs, self-employed persons and business owners; to help you lead your business to success through new creative ways of thinking, behaving and acting in today’s challenging economy.",
  },
];

const HeroSection8 = () => {
  return (
    <div className="hero-section-8 d-center-col">
      <div className="content d-center-col gap-4">
        <h2 >Frequently Asked Questions</h2>

        <div className="accordion  w-100 " id="accordionExample">
          {faqData.map((item, index) => {
            // const collapseId = `collapse${index}`;

            return (
              <div className="accordion-item">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                    >
                    <span className="accordion-btn">{item.question}</span>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    If you’re still reading, then it’s for you! It is for anyone
                    who wants to achieve more from life in all areas, especially
                    income. You may be an employee wanting to excel to a new
                    promotion or start a passive income on the side or better
                    yet, go out and start something of your own, you're just not
                    sure where or how to start. Or you may already be in
                    business and are sick and tired of using the same failed
                    methods, getting no further along and having less time. You
                    want to break through that financial ceiling and start
                    creating more time and financial freedom, so you can focus
                    back ON your business, rather than IN it, isn’t that why you
                    became an entrepreneur in the first place? This is for
                    anyone who is ready to raise their game and WIN
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="accordion-item">
            <h2 className="accordion-header ">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span className="accordion-btn">Who is this for?</span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                If you’re still reading, then it’s for you! It is for anyone who
                wants to achieve more from life in all areas, especially income.
                You may be an employee wanting to excel to a new promotion or
                start a passive income on the side or better yet, go out and
                start something of your own, you're just not sure where or how
                to start. Or you may already be in business and are sick and
                tired of using the same failed methods, getting no further along
                and having less time. You want to break through that financial
                ceiling and start creating more time and financial freedom, so
                you can focus back ON your business, rather than IN it, isn’t
                that why you became an entrepreneur in the first place? This is
                for anyone who is ready to raise their game and WIN
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection8;

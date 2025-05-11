import React from "react";

const Faqs = () => {
  return (
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h5>How can I track my order?</h5>
        <p>
          You can track your order by logging into your account and clicking on
          'Track Order'.
        </p>
      </div>
      <div className="faq-item">
        <h5>What is the return policy?</h5>
        <p>
          We offer a 30-day return policy. Please visit our Returns & Exchanges
          page for more information.
        </p>
      </div>
      {/* Add more FAQs as needed */}
    </div>
  );
};

export default Faqs;

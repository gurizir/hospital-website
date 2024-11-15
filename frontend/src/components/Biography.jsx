import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Zeecare Hospital stands as a beacon of hope, blending expertise with
            heartfelt care. With cutting-edge technology and a team of skilled
            professionals, we prioritize patient-centered healthcare. Our
            services span from routine checkups to complex procedures, ensuring
            comprehensive care under one roof. Every aspect of Zeecare is
            designed to provide a supportive and healing environment for
            patients and their families. Innovation, trust, and compassion form
            the pillars of our approach, setting new benchmarks in healthcare
            delivery. At Zeecare, every individual matters, and our unwavering
            focus is on enhancing lives through quality care. We strive to be
            more than a hospital — a partner in your journey toward health and
            wellness.
          </p>
          <p>We are all in 2024!</p>
          <p>We love flexi.</p>
          <p>
            At Zeecare Hospital, we prioritize trust and compassionate care for
            every individual. Our expert teams ensure accurate diagnoses and
            personalized treatments for all patients. From modern facilities to
            a focus on preventive care, Zeecare sets the standard for
            excellence. We’re committed to innovation and aim to redefine
            healthcare with a patient-first approach. Zeecare isn’t just a
            hospital—it’s a partner in your journey toward health and recovery.
          </p>
          <p>ZeeCare hospital is the best!</p>
          <p>BEST HOSPITAL EVERRRRRR purr</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

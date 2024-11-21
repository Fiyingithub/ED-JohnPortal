import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
// Images
import HeaderImage from "../Assets/Images/WEB-Scholarship-Slider (1).jpg";
import sectionimage from "../Assets/Images/MATRICULATIONArtboard-5.jpg";
import sectionImage2 from "../Assets/Images/sectionImage.jpg";
import ServicesCard from "../Component/ServicesCard";
import PrincipalCard from "../Component/PrincipalCard";

const LandingPage = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <div>
        {/* Meet the credit card of the future */}
        <div class="mt-10 md:mt-0">
          <div>
            <img
              className="md:w-full md:h-screen object-cover"
              src={HeaderImage}
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="px-4 md:px-0 max-w-[1200px] mx-auto">
        <h1 className="text-center font-medium text-2xl md:text-4xl my-16">
          STUDY AT ED-JOHN INSTITUTE OF MANAGEMENT <br /> & TECHNOLOGY
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:[50%] md:p-4 text-xl md:text-2xl">
            <p className="font-semibold">ED-JOHN Institute of Management &Technology </p> <p> is more than just an
            institution, it is a gateway to a world of opportunities. Our
            mission is to provide quality education to students from all walks.
            At ED-JOHN we don't just teach, we train to be the best.</p>
          </div>

          <div>
            <img className="w-full lg:w-[1500px]" src={sectionimage} alt="" />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-0 max-w-[1200px] mx-auto md:py-10">
        <h1 className="text-center font-medium text-2xl md:text-4xl my-16">
          BEING A WORLD CLASS INSTITUTION
        </h1>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-6 md:gap-20">
          <div className="w-full flex flex-col space-y-10 md:[50%] md:p-4 text-xl md:text-2xl">
            <div>
              <p className="font-semibold">DR. OSAREN EMOKPAE</p>
            </div>
            <p>ED-JOHN Institute is a leading institution dedicated to quality teaching,learning,research and community service.</p>

            <p>Our Vision is to create a world class center for learning, skill acquisition and research.</p>

            <p>Our Mission is to equip the youths with the skillset to become successful leaders and enterpreneurs</p>
          </div>

          <div className="w-full">
            <img className="w-full lg:w-[700px] lg:h-[600px]" src={sectionImage2} alt="" />
          </div>
        </div>
      </section>

      <section className="my-20">
      <div className="my-10">
          <h1 className="text-center text-2xl md:text-4xl font-semibold">WHY YOU SHOLUD CHOOSE US</h1>
        </div>
        <ServicesCard/>
      </section>

      <section className="my-10">
        <div className="my-10">
          <h1 className="text-center text-2xl md:text-4xl font-semibold">OUR PRINCIPALS</h1>
        </div>
        <PrincipalCard/>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

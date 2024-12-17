import Features from "@/components/Features/index";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Page | Students union - Sliate kurunegala",
  description: "This is News page students union sliate kurunegala",
  // other metadata
};

const FeaturesPage = () => {
  return (
    <>
    <Breadcrumb
      pageName="News Page"
      description="Join us as we celebrate achievements, share news, and build a stronger community together."
    />
    <Features />
    {/* <AboutSectionTwo /> */}
  </>
  );
};

export default FeaturesPage;
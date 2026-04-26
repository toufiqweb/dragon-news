import AboutFeatures from "@/components/aboutpage/AboutFeatures";
import AboutHero from "@/components/aboutpage/AboutHero";
import AboutStory from "@/components/aboutpage/AboutStory";

export const metadata = {
  title: "Dragon News - About",
};

const AboutPage = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <AboutHero />
      {/* Story section */}
      <AboutStory/>
      {/* Features section */}
      <AboutFeatures/>

    </div>
  );
};

export default AboutPage;

import AboutFeatures from "@/components/aboutpage/AboutFeatures";
import AboutHero from "@/components/aboutpage/AboutHero";
import AboutStats from "@/components/aboutpage/AboutStats";
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
      <AboutStory />
      {/* Features section */}
      <AboutFeatures />
      {/* Stats section */}
      <AboutStats />
    </div>
  );
};

export default AboutPage;

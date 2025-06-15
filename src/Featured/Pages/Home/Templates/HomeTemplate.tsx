import AddtoCardSection from "../Components/AddtoCardSection";
import BannerSection from "../Components/BannerSection";
import FeaturesSection from "../Components/FeaturesSection";
import QuickAddSection from "../Components/QuickAddSection";
import ServicesSection from "../Components/ServicesSection";
import TrendProductSection from "../Components/TrendProductSection";
import VideoSection from "../Components/VideoSection";
const HomeTemplate = () => {
  return (
    <div>
      <BannerSection />
      <ServicesSection />
      <FeaturesSection />
      <TrendProductSection />
      <AddtoCardSection />
      <VideoSection />
      <QuickAddSection />
    </div>
  );
};

export default HomeTemplate;

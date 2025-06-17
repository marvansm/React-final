import AddtoCardSection from "../Components/AddtoCardSection";
import BannerSection from "../Components/BannerSection";
import DetailSection from "../Components/DetailSection";
import FeaturesSection from "../Components/FeaturesSection";
import NewsSection from "../Components/NewsSection";
import QuickAddSection from "../Components/QuickAddSection";
import ReviewSection from "../Components/ReviewSection";
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
      <DetailSection />
      <NewsSection />
      <ReviewSection />
    </div>
  );
};

export default HomeTemplate;

import HeroSection from "@/components/HeroSection";
import CareerTimeline from "@/components/CareerTimeline";
import StatsDashboard from "@/components/StatsDashboard";
import StatcastDashboard from "@/components/StatcastDashboard";
import CareerChart from "@/components/CareerChart";
import PitchArsenal from "@/components/PitchArsenal";
import PitchingHighlights from "@/components/PitchingHighlights";
import PhotoGallery from "@/components/PhotoGallery";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CareerTimeline />
      <StatsDashboard />
      <StatcastDashboard />
      <CareerChart />
      <PitchArsenal />
      <PitchingHighlights />
      <PhotoGallery />
      <StorySection />
    </>
  );
}

import HeroSection from "../components/herosection/HeroSection";
import InfoSection from "../components/infosection/InfoSection";
import WeeklyMessage from "../components/message/WeeklyMessage";
import Gallery from "../components/reuseable/Gallery";
import LeaderBoardTwo from "../components/leaderboard/LeaderBoardTwo";
import TeachersSlider from "../components/teachers/TeachersSlider";
import VideoSection from "../components/videosection/VideoSection";
import WeeklyMessageTwo from "../components/message/WeeklyMessageTwo";
import MasterLayout from "../components/masterLatout/MasterLayout";

function HomePage() {
  return (
    <MasterLayout>
      <HeroSection />
      <InfoSection />
      <WeeklyMessage />
      <Gallery />
      <WeeklyMessageTwo />
      <LeaderBoardTwo />
      <VideoSection />
      <TeachersSlider />
    </MasterLayout>
  );
}
export default HomePage;

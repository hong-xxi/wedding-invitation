import BackgroundMusic from "./components/BackgroundMusic";
import CoverSection from "./sections/CoverSection";
import InnerSection from "./sections/InnerSection";
import MessageSection from "./sections/MessageSection";
import GallerySection from "./sections/GallerySection";
import InfoSection from "./sections/InfoSection";
import LocationSection from "./sections/LocationSection";
import MapSection from "./sections/MapSection";
import AccountSection from "./sections/AccountSection";

export default function App() {
  return (
    <>
      <BackgroundMusic />
      <CoverSection />
      <InnerSection />
      <MessageSection />
      <GallerySection />
      <InfoSection />
      <LocationSection />
      <MapSection />
      <AccountSection />
    </>
  );
}

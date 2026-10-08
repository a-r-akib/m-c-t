import HomeHero from "@/components/Home/HomeHero";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeService from "@/components/Home/HomeService";
import HomeOffer from "@/components/Home/HomeOffer";
import HomeGallery from "@/components/Home/HomeGallery";
import HomeContact from "@/components/Home/HomeContact";
import HomeReviews from "@/components/Home/HomeReviews";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeOffer />
      <HomeService />
      <HomeGallery />
      <HomeReviews />
      <HomeContact />
    </>
  );
}

import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <article id="home" className="flex flex-col md:flex-row">
      <HeroText />
      <HeroVisual />
    </article>
  );
}

import React from "react";
import { Card } from "./components/Card/Card";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";
const cardDetails = {
  img_url:
    "https://s3-alpha-sig.figma.com/img/0ff9/9cf1/f1ec6d6e5f55a783f39005756c3e5d9e?Expires=1679270400&Signature=AKzdHnLMR4hgP7GDd0yFqCyUg1ZW1zapuoad3M8x~JK0pXVQ~9EYh0Jt1KlzsTMik82PHdb-ipz0QOsg1eRPGkWkNFjEbKZJnEU5JDJ9E3XGgst48brD8bnVactLUvRtY7D52iDXkw~~7lsgiRMpPXxP-T~i-r3JVm1ZcsV~Oho4MtXMrtKq-INauXWGBWdhRNr6bzYAEWleJbdJ1sUvOn23VEOBxHQs4GqlBvsmKbqElidB5c0ralGV2R-GkUjaCidSC7m1utm4rhJNWlPkfrLT~MExLcZo~cFIeOxrBoqB~osVSTL4Zo3vaVa9jZ8oy~UlpEA7uJRyUPCnyKcjMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  title: "New English Songs",
  no_of_follower: 100,
  type_of_follower: "Follows",
};
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card cardDetails={cardDetails} />
    </>
  );
}

export default App;

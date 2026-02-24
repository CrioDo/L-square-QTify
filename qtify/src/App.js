import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Songs from "./components/Songs/Songs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      />

      <Section
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      />

      <Songs />
    </>
  );
}

export default App;
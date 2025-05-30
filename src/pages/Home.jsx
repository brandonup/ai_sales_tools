import Section from '../components/Section';
import content from '../content.json';

const Home = () => {
  return (
    <Section title="Welcome" customClassName="home-welcome-section">
      <h1>{content.home.welcomeText}</h1>
      <p>{content.home.description}</p>
    </Section>
  );
};

export default Home;

import Section from '../components/Section';
import contentData from '../content.json';

const AppBuilders = () => {
  const { title, introText, builders } = contentData.appBuildersPage;

  return (
    <Section title={title}>
      <p>{introText}</p>
      <ul>
        {builders.map((builder, index) => (
          <li key={`${builder.name}-${index}`}>
            <a href={builder.url} target="_blank" rel="noopener noreferrer">
              {builder.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default AppBuilders;

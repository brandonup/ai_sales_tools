import Section from '../components/Section';
import content from '../content.json';

const ApiKeys = () => {
  return (
    <Section title="API Keys">
      {content.apiKeys.map(item => (
        <div key={item.id} className="api-key-link mb-4"> {/* Added mb-4 for spacing */}
          <h3 className="is-size-5 has-text-weight-semibold mb-2">{item.label}</h3> {/* Display label as a heading */}
          <a href={item.content} target="_blank" rel="noopener noreferrer" className="button is-primary">
            Open Link
          </a>
          <p className="is-size-7 mt-1">Click the button to access the document for: {item.label}</p> {/* Added descriptive text */}
        </div>
      ))}
    </Section>
  );
};

export default ApiKeys;

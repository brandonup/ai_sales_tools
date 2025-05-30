import Section from '../components/Section';
import TextBox from '../components/TextBox';
import content from '../content.json';

const PromptExamples = () => {
  return (
    <Section title="Prompt Examples">
      {content.promptExamples.map(item => (
        <TextBox
          key={item.id}
          id={item.id}
          label={item.label}
          content={item.content}
        />
      ))}
    </Section>
  );
};

export default PromptExamples;

import Section from '../components/Section';
import TextBox from '../components/TextBox';
import contentData from '../content.json';

const Instructions = () => {
  const { title, instructions, notes } = contentData.instructionsPage;

  return (
    <Section title={title} customClassName="instructions-page-section">
      <TextBox
        id="instructions-textbox"
        label="Instructions"
        content={instructions.join('\n')}
        asList={false}
      />
      <TextBox
        id="instructions-notes-textbox"
        label="Important Notes"
        content={notes.join('\n')}
        asList={false}
      />
    </Section>
  );
};

export default Instructions;

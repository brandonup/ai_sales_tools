import Section from '../components/Section';
import content from '../content.json';

const PresentationDeck = () => {
  return (
    <Section title="Presentation Deck">
      <div className="presentation-deck-link">
        <a href={content.deckUrl} target="_blank" rel="noopener noreferrer" className="button is-primary">
          Open Presentation Deck
        </a>
        <p>Click the button above to open the presentation slides in a new tab.</p>
      </div>
    </Section>
  );
};

export default PresentationDeck;

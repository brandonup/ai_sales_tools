/**
 * Wrapper component for consistent section spacing and styling
 * @param {string} title - Section title
 * @param {React.ReactNode} children - Section content
 * @param {string} [customClassName] - Optional custom class name to add to the section
 */
const Section = ({ title, children, customClassName }) => {
  const sectionClasses = ["section", customClassName].filter(Boolean).join(" ");
  return (
    <section className={sectionClasses}>
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;

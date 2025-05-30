import { useState } from 'react';

/**
 * Reusable component for displaying text content with copy functionality
 * @param {string} id - Unique identifier for the text box
 * @param {string} label - Label text displayed above content
 * @param {string} content - Main text content to display and copy
 * @param {boolean} [asList=false] - Whether to render content as an ordered list
 */
const TextBox = ({ id, label, content, asList = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-box">
      <div className="text-box-header">
        <h3>{label}</h3>
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div
        className="text-box-content"
        style={asList ? { whiteSpace: 'normal', fontFamily: 'inherit', fontSize: 'inherit' } : {}}
      >
        {asList ? (
          <ol className="text-box-ordered-list">
            {content.split(/\r?\n|\\n/).map((item, index) => (
              item.trim() && <li key={`${id}-item-${index}`} className="text-box-list-item">{item.replace(/^\d+\)\s*/, '')}</li>
            ))}
          </ol>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default TextBox;

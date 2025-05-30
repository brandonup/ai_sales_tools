/**
 * Simple toast notification component
 * @param {string} message - Message to display in toast
 * @param {boolean} visible - Whether toast is visible
 */
const Toast = ({ message, visible }) => {
  return visible ? (
    <div className="toast" role="alert">
      {message}
    </div>
  ) : null;
};

export default Toast;

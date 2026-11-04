import useReveal from '../hooks/useReveal';

// Wraps content so it fades in the first time it scrolls into view.
function Reveal({ className = '', children }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Reveal;

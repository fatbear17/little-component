/**
 * The LittleComponent component. Use to access directly the function or variable in the React component
 * @param {Object} props - The properties of component
 * @param {string} props.id - The component id
 */
const LittleComponent = ({ id, ...others }) => {
  return (
    <div
      key={id}
      name={id}
      ref={(ref) => {
        if (ref) {
          ref.customData = { ...others };
        }
      }}
    />
  );
};

export default LittleComponent;
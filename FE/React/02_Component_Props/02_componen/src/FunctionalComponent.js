import PropTypes from "prop-types";

function FunctionalComponenet({ name, status }) {
  // { name: "Wallace", status: "human"}
  return (
    <div>
      <h1>Hello World! with FunctionalComponenet</h1>
      <h2>
        {name} is {status}
      </h2>
    </div>
  );
}
// const FunctionalComponenet = () => {}

// Error handling
// Set default value when there's no input
FunctionalComponenet.defaultProps = {
  name: "Jin Kim",
  status: "human",
};

FunctionalComponenet.porpTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
};

export default FunctionalComponenet;

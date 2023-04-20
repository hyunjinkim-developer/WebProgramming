function SyntheticEvent() {
  function SyntheticEvent(event) {
    /* Synthetic Event: 
    wrapper that forms part of React’s Event System
    a cross-browser wrapper around the browser’s native event. */
    console.log(event);
  }

  function printInputValue(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <button onClick={SyntheticEvent}>
        Print in console, Synthetic event
      </button>
      <br></br>
      {/* onChange: run whenever the value changes */}
      <input
        type="text"
        placeholder="Type anthing"
        onChange={printInputValue}
      ></input>
    </div>
  );
}

export default SyntheticEvent;

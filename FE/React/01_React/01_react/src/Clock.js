{
  /* Create only one component per script */
}
function Clock() {
  return (
    <div className="clock-container">
      {/* toLocalTimeString() :  returns a string with a language-sensitive representation of the date portion of the specified date in the user agent's timezone */}
      <h1>Current time is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

{
  /* export this function so that can be used outside of this script */
}
export default Clock;

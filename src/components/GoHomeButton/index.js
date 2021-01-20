import { useHistory } from "react-router-dom";

function GoHomeButton() {
  let history = useHistory();
  
  function handleHistory() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleHistory}>
      Go home
    </button>
  );
}
export default GoHomeButton
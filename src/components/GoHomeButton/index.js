import { useHistory } from 'react-router-dom';

function GoHomeButton() {
  const history = useHistory();

  function handleHistory() {
    history.push('/');
  }

  return (
    <button type="button" onClick={handleHistory}>
      Go home
    </button>
  );
}
export default GoHomeButton;

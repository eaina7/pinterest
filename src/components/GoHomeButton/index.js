import { useHistory } from 'react-router-dom';

export default function GoHomeButton({ className, caption }) {
  const history = useHistory();

  function onClickHandler() {
    history.push('/');
  }

  return (
    <button type="button" className={className} onClick={onClickHandler}>
      {caption}
    </button>
  );
}

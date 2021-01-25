import { useHistory } from 'react-router-dom';

export default function GoBackButton({ className, caption, home }) {
  const history = useHistory();

  function onClickHandler() {
    home === 'yes' ? history.push('/') : history.goBack();
  }

  return (
    <button type="button" className={className} onClick={onClickHandler}>
      {caption}
    </button>
  );
}

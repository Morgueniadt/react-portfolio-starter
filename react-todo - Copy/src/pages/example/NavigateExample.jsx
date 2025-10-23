import { useNavigate } from 'react-router-dom';

export default function NavigateExample() {
  const navigate = useNavigate();

  const handleClick = () => {
   

    navigate('/');
  };

  return (
    <>
      <h1>Hello from NavigateExample</h1>
      <button onClick={handleClick}>Go to Home</button>
    </>
  );
}

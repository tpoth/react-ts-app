import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found!</h1>
      <Link to="/">Zur Homepage</Link>
    </>
  );
}

export default NotFound;

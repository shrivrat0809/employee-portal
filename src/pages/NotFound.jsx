import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
      <div>Sorry! This page is not available</div>
      <Link to="/dictionary">search another</Link>
    </>
  );
}

export default NotFound
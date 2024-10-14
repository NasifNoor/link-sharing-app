import { Link } from "react-router-dom";

const RouteNotFound = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Route Not Found!!</h1>
      <Link to={'/'} ><h1 className="text-xl font-bold underline">Go to Home Page</h1></Link>
    </>
  );
};
export default RouteNotFound;

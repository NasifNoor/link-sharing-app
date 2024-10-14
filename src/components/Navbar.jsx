import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div>
        <div><img height={20} width={20} className="nav-logo" src='/chain.png' alt="Logo" />;</div>
        logo
        menu 
        preview
    </div>
      <Link to={'/'} className="text-3xl font-bold underline"><h1>Route Not Found</h1></Link>
    </>
  );
};
export default Navbar;

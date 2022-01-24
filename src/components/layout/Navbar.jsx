import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return <nav className = "navbar mb-2 shadow-lg bg-neutral text-neutral-content">
  <div className="container mx-auto">
    <div className="px-2 mx-2">
      <FaGithub className="inline text-3xl pr-2" />
      <Link to="/" className="text-lg font-bold">
      {title}
      </Link>
    </div>
    <div className="flex-1 px-2 mx-2">
      <div className="flex justify-end">
        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
          Home
        </Link>
      </div>
    </div>
  </div>
  </nav>
}


Navbar.defaultProps = {
  title: "Github Search Engine"
}

export default Navbar;

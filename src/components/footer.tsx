import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <img src={logo} alt="logo-futebol-de-hoje" className="size-24" />
        <p>
          Designed and developed by Jean Carlos Developer.
          <br />
          All Rights reserved by Jean Carlos &copy; & Futebol de Hoje &copy;
          2024.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/devJcdzn" target="_blank">
            <FaGithub className="size-6 hover:opacity-40" />
          </a>
          <a
            href="https://www.instagram.com/jean_cl_oliveira?igsh=MWQxenpsdGsxY3VuYw=="
            target="_blank"
          >
            <AiFillInstagram className="size-6 hover:opacity-40" />
          </a>
          <a href="https://jean-carlos-web.netlify.app/" target="_blank">
            <FaLink className="size-6 hover:opacity-40" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

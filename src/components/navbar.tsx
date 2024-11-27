import { Search } from "lucide-react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-2xl font-oswald">
          <img
            src={logo}
            alt="logo-futebol-de-hoje"
            className="size-12 object-cover"
          />
          <span>Futebol de Hoje</span>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control relative">
          <input
            type="text"
            placeholder="Busque pelo seu time de coração"
            className="input input-bordered w-80 md:w-auto md:min-w-80"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <Search className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

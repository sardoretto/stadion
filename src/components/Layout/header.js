import { useContext, useState } from "react";
import { cart, closeMenu, openMenu, user } from "../../utils/icons";
import { Link } from "react-router-dom";

import CustomLink from "././customLink";
import { ProductContext } from "../../utils/productContext";
const Header = () => {
  const [menuBtn, setOpenBtn] = useState(true);

  return (
    <header>
      <nav className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => {
                  setOpenBtn(!menuBtn);
                }}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {menuBtn && openMenu}
                {!menuBtn && closeMenu}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start ">
              <Logo />
              <Navigations />
            </div>
            <UserDetail />
          </div>
        </div>
        {!menuBtn && <MobileMenu />}
      </nav>
    </header>
  );
};

export default Header;

function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center gap-2">
      <Link to="/">
        <img
          className=" h-8 w-auto"
          src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-stadium-city-scape-xnimrodx-lineal-color-xnimrodx.png"
          alt="stadium-star"
        />
      </Link>
      <Link to="/" className="text-white font-semibold hidden lg:block text-xl">
        Stadium-star
      </Link>
    </div>
  );
}

function Navigations() {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <CustomLink
          to="/"
          className=" text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          Home
        </CustomLink>

        <CustomLink
          to="/ss"
          className="text-white hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium"
        >
          Team
        </CustomLink>

        <CustomLink
          to="/sss"
          className="text-white hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </CustomLink>

        <CustomLink
          to="/about"
          className="text-white hover:text-gray-400  px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </CustomLink>
      </div>
    </div>
  );
}

function UserDetail() {
  const { cartStadions } = useContext(ProductContext);
  console.log(cartStadions.length);
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <span className="sr-only">View notifications</span>
      <Link to={"/cart"}>
        <span class="relative inline-block">
          {cart}
          <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {cartStadions.length}
          </span>
        </span>
      </Link>

      <div className="ml-3 relative">
        <div>
          <Link to={"/register"}>
            <span className="sr-only">Open user menu</span>
            {user}
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <CustomLink
          to="/"
          className=" text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          Home
        </CustomLink>

        <CustomLink
          to="/s"
          className="text-white hover:text-gray-400  block px-3 py-2 rounded-md text-base font-medium"
        >
          Team
        </CustomLink>

        <CustomLink
          to="/s"
          className="text-white hover:text-gray-400  block px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </CustomLink>
        <CustomLink
          to="/about"
          className="text-white hover:text-gray-400  block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </CustomLink>
      </div>
    </div>
  );
}

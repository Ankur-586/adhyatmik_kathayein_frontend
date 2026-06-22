import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";

import Container from "../ui/Container";
import logo from "../../assets/logo/logo.png";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Stories",
        path: "/stories",
    },
    {
        name: "Videos",
        path: "/videos",
    },
    {
        name: "Categories",
        path: "/categories",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-amber-100/70 bg-white/90 backdrop-blur-md shadow-sm">
            <Container className="flex h-20 items-center justify-between">

                <div className="flex items-center gap-3">

                    <img
                        src={logo}
                        alt="Adhyatmik Kathayein"
                        className="h-11 w-11 rounded-full object-cover"
                    />

                    <div>

                        <h1 className="text-lg font-bold text-gray-900">
                            Adhyatmik Kathayein
                        </h1>

                        <p className="text-xs text-gray-500">
                            Sanatan Wisdom
                        </p>

                    </div>

                </div>

                <nav className="hidden items-center gap-8 md:flex">

                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            
                            className={({ isActive }) =>
                                `relative text-sm font-medium transition-colors duration-300 ${
                                    isActive
                                        ? "text-amber-600"
                                        : "text-gray-700 hover:text-amber-600"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                </nav>
            <div className="flex items-center gap-4">
                

                <button /* search button */
                    className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50 md:flex"
                >
                    <FiSearch className="text-xl text-gray-700" />
                </button>

                <button /*Mobile Menu Button*/
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50 md:hidden"
                >
                    <FiMenu className="text-2xl text-gray-700" />
                </button>

            </div>
            </Container>
        </header>
    
    );
};

export default Navbar;
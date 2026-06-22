import { NavLink } from "react-router-dom";

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
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <h1 className="text-xl font-bold text-orange-600">
                    Adhyatmik Kathayein
                </h1>

                <nav className="flex gap-8">

                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-orange-600"
                                    : "text-gray-700 hover:text-orange-600 transition"
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                </nav>

            </div>
        </header>
    );
};

export default Navbar;
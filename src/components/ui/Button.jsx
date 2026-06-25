import { Link } from "react-router-dom";

const Button = ({
    children,
    variant = "primary",
    to,
    href,
    className = "",
}) => {
    const baseClass =
        "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-300";

    const variants = {
        primary:
            "bg-amber-600 text-white shadow-lg hover:bg-amber-700 hover:scale-105",

        secondary:
            "border border-amber-600 bg-white text-amber-700 hover:bg-amber-50 hover:scale-105",
    };

    const classes = `${baseClass} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return <button className={classes}>{children}</button>;
};

export default Button;
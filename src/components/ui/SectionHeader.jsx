const SectionHeader = ({ badge, title, description }) => {
    return (
        <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                {badge}
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
                {title}
            </h2>

            <p className="mx-auto mt-5 text-lg leading-8 text-gray-600">
                {description}
            </p>

        </div>
    );
};

export default SectionHeader;
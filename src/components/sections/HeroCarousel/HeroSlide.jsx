import Button from "../../ui/Button";

const HeroSlide = ({ slide }) => {
    return (
        <div className="relative h-[65vh] lg:h-[72vh] xl:h-[75vh] w-full overflow-hidden rounded-[40px]">

            {/* Background Image */}

            <img
                src={slide.image}
                alt={slide.title}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    select-none
                "
                draggable="false"
            />

            {/* Dark Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/75
                    via-black/45
                    to-black/10
                "
            />

            {/* Content */}

            <div className="relative z-10 flex h-full items-center">

                <div className="w-full px-12 lg:px-16">

                    <div className="max-w-xl ml-8 lg:ml-12">

                        <span className="inline-flex rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-300 backdrop-blur">
                            {slide.badge}
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
                            {slide.title}
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-gray-200 lg:text-lg">
                            {slide.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button>
                                {slide.primaryButton.text}
                            </Button>

                            <Button variant="secondary">
                                {slide.secondaryButton.text}
                            </Button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default HeroSlide;
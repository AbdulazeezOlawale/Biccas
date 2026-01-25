import Image from "next/image";
import Play from "@/app/assets/icons/Play";
import BiccasButton from "../common/BiccasButton";
import { useScrollStore } from "@/app/store/ScrollStore";

const Hero = () => {
  const hidden = useScrollStore((state) => state.hidden);
  const scrollY = useScrollStore((state) => state.scrollY);

  let navClass = "";

  if (hidden && scrollY > 60) {
    navClass = "pt-66px transition-all ease-in-out duration-300";
  } else if (!hidden && scrollY > 60) {
    navClass = "pt-66px transition-all ease-in-out duration-300";
  } else if (!hidden && scrollY < 60) {
    navClass = "";
  }

  return (
    <header className="h-dvh md:py-16 lg:h-[80vh] w-full relative overflow-hidden flex lg:align-middle lg:justify-center lg:items-center hero">
      {/* Background gradients */}
      <div className="absolute -top-1/6 -left-1/12 h-[500px] w-[500px] rounded-full bg-(--primary-color)/15 blur-3xl" />
      <div className="absolute -bottom-1/6 -right-1/12 h-[600px] w-[600px] rounded-full bg-(--primary-color)/15 blur-3xl" />

      <section className={`container ${navClass} flex justify-around`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2 sm:gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h1 className="text-center lg:text-left">
                We’re here to Increase your Productivity
              </h1>

              <p
                style={{ color: "var(--text-black)" }}
                className="text-(--text-black) text-center lg:text-left"
              >
                Let&apos;s make your work more organize and easily using the
                Taskio Dashboard with many of the latest features in managing
                work everyday.
              </p>
            </div>

            <div className="flex flex-row gap-4 items-center justify-center lg:justify-start">
              <BiccasButton
                title="Try free trial"
                classname="text-(--default-font-size)"
              />
              <button className="play-btn hover:scale-105 transition-all">
                <Play />
                <span className="text-(--text-black) pr-1">View Demo</span>
              </button>
            </div>
          </div>

          <div className="h-full w-full overflow-hidden">
            <Image
              src="/images/hero-desktop.png"
              alt="Hero"
              width={1404}
              height={1118}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Hero;

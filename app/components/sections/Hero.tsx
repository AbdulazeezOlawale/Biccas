import Image from "next/image";
import Play from "@/app/assets/icons/Play";
import BiccasButton from "../common/BiccasButton";

const Hero = () => {


  return (
    <header className="h-dvh lg:h-[80vh] xl:h-dvh w-dvw relative overflow-hidden flex lg:align-middle lg:justify-center lg:items-center hero">
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_top_left,#54be96_-60%,#fffafc_30%)]"></div>
      <div className="absolute -z-50 w-[50%] right-0 h-dvh bg-[radial-gradient(circle_at_center_right,#54be96_-90%,#fffafc_40%)]"></div>

      <section className="container pt-[calc(24px+36px)] md:pt-[calc(24px+66px+3vh)] lg:pt-[calc(24px+66px+1vh)] flex justify-around">
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

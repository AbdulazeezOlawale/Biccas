import Image from "next/image";
import BiccasButton from "../../common/button";
import Play from "@/app/assets/icons/Play";
import Unsplash from "@/app/assets/icons/Unsplash";
import Notion from "@/app/assets/icons/Notion";
import Intercom from "@/app/assets/icons/Intercom";
import Descript from "@/app/assets/icons/Descript";
import Grammarly from "@/app/assets/icons/Grammarly";

const Hero = () => {

  type partnerType = {
    Component: React.FC;
    id: string;
  };
    
  const partnerComponents: partnerType[] = [
    { Component: Unsplash, id: "unsplash" },
    { Component: Notion, id: "notion" },
    { Component: Intercom, id: "intercom" },
    { Component: Descript, id: "descript" },
    { Component: Grammarly, id: "grammarly" },
  ];

  return (
    <header className="h-dvh w-dvw relative overflow-hidden">
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_top_left,#54be96_-60%,#fffafc_30%)]"></div>
      <div className="absolute -z-50 w-[50%] right-0 h-dvh bg-[radial-gradient(circle_at_center_right,#54be96_-90%,#fffafc_40%)]"></div>

      <section className="container pt-[calc(24px+66px+8vh)] flex flex-col gap-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <h1 className="lg:text-[3vw] font-medium">
                We’re here to Increase your Productivity
              </h1>

              <p className="text-(--default-paragraph)">
                Let&apos;s make your work more organize and easily using the
                Taskio Dashboard with many of the latest features in managing
                work everyday.
              </p>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <BiccasButton
                title="Try free trial"
                classname="text-(--default-font-size)"
              />
              <button className="play-btn">
                <Play />{" "}
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
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div>
            <h3 className="">More than 25,000 teams use Collabs</h3>
          </div>
          <div className="flex flex-row gap-8">
            {partnerComponents.map((item:partnerType) => (
              <item.Component key={item.id}/>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
};
export default Hero;

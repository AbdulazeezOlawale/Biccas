const Hero = () => {
  return (
    <section className="h-dvh w-dvw relative overflow-hidden">
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_top_left,#54be96_-60%,#fffafc_30%)]"></div>
      <div className="absolute -z-50 w-[50%] right-0 h-dvh bg-[radial-gradient(circle_at_center_right,#54be96_-90%,#fffafc_40%)]"></div>

      <section className="container pt-[calc(24px+66px+8vh)] grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <div className="flex flex-col gap-14">
            <h1 className="lg:text-[3vw] font-medium">
              We’re here to Increase your Productivity
            </h1>

            <p className="text-(--default-paragraph)">
              Let&apos;s make your work more organize and easily using the
              Taskio Dashboard with many of the latest features in managing work
              everyday.
            </p>
          </div>

          <div></div>
        </div>

        <div>image</div>
      </section>
    </section>
  );
};
export default Hero;

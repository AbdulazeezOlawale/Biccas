import React from "react";
import BiccasButton from "../common/BiccasButton";
import Image from "next/image";

interface ProductFeaturesDataProps {
    image: string,
    header: string,
    desc: string
}

const ProductFeatures = () => {
  const ProductFeaturesData: ProductFeaturesDataProps[] = [
    {
      image: "/images/product3.png",
      header: "Collboration Teams",
      desc: "Here you can handle projects together with team virtually",
    },
    {
      image: "/images/product2.png",
      header: "Cloud Storage",
      desc: "No nedd to worry about storage because we provide storage up to 2 TB",
    },
    {
      image: "/images/product1.png",
      header: "Daily Analytics",
      desc: "We always provide useful informatin to make it easier for you every day",
    },
  ];

  return (
    <section className="bg-[#FFFFFF]">
      <div className="container container-space flex flex-col gap-16">
        <div className="flex items-center justify-between gap-8">
          <h2>Our Features you can get</h2>

          <p>
            We offer a variety of interesting features that you can help
            increase your productivity at work and manage your project easily
          </p>

          <BiccasButton
            title="Get Started"
            classname="whitespace-nowrap shrink-0"
          />
        </div>

        <div className="grid grid-cols-3 gap-8">
          {ProductFeaturesData.map(
            (item: ProductFeaturesDataProps, index: number) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-center "
              >
                <div className="rounded-[20px] overflow-hidden w-full shadow-md">
                    <Image
                    src={item.image}
                    alt="product image"
                    width={1404}
                    height={1118}
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                    className="h-full w-full "
                    />
                </div>
                <div className="flex flex-col justify-end">
                  <h4>{item.header}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;

import React from "react";
import BiccasButton from "../common/BiccasButton";
import Image from "next/image";

interface ProductFeaturesDataProps {
  image: string;
  header: string;
  desc: string;
}

const ProductFeatures = () => {
  const ProductFeaturesData: ProductFeaturesDataProps[] = [
    {
      image: "/images/product3.png",
      header: "Collaboration Teams",
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
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between">
          <h2 className="text-left w-full lg:flex-1">
            Our Features you can get
          </h2>

          <div className="flex flex-col md:flex-row lg:flex-2 gap-4 items-center">
            <p className="text-center md:text-left">
              We offer a variety of interesting features that you can help
              increase your productivity at work and manage your project easily
            </p>

            <span>
              <BiccasButton
                title="Get Started"
                classname="whitespace-nowrap shrink-0"
              />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {ProductFeaturesData.map(
            (item: ProductFeaturesDataProps, index: number) => (
              <div key={index} className="flex flex-col gap-4 items-center ">
                <div className="grid place-items-center rounded-[20px] overflow-hidden shadow-md w-full bg-gray-50">
                  <div className="relative w-full h-0 pb-[75%]">
                    {" "}
                    {/* Aspect ratio container */}
                    <Image
                      src={item.image}
                      alt="product image"
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <h4>{item.header}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;

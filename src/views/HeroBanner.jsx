import { Button } from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imageUrls, sliderSettings } from "../utils";

export const HeroBanner = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/img/main_bg.png')]">
      <div className="px-2 py-32 lg:py-40 min-h-screen  bg-neutral-950/70">
        <div className="max-w-4xl px-8 md:px-32">
          <div className="sm:mb-8 sm:flex ">
            <h3 className="text-xl font-bold text-rose-500">Monolith</h3>
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Use AI software to test less and learn more.
            </h1>
            <p className="mt-6 text-lg leading-8 ">
              Spend less time running expensive, repetitive tests and more time
              learning from your engineering data to predict the exact tests to
              run.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center gap-x-6">
              <Button
                className="py-4 rounded-3xl banner--button-primary "
                title={"Request Demo"}
                upperCase={true}
              />
              <Button
                className="py-4 rounded-3xl banner--button-secondary "
                title={"Speak to our team"}
                upperCase={true}
              />
            </div>
          </div>
        </div>
        <div className="max-w-6xl md:pl-32 px-8 py-24 ">
          <Slider {...sliderSettings}>
            {imageUrls.map((url) => (
              <div key={url}>
                <img
                  className="my-auto mx-auto w-auto h-8 md:h-10 px-6 hover:opacity-60 transition-all duration-500 ease-in-out hover:cursor-grab"
                  src={url}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

import { useRef } from "react";
import { Button } from "./Button";

export const AccordionItem = ({
  heading,
  info,
  image,
  isOpen,
  onClick,
  index,
}) => {
  const contentHeight = useRef();
  return (
    <div className="flex gap-2 justify-evenly item--container">
      <div className="flex-1 flex-grow">
        <button
          data-testid="info-button"
          type="button"
          className={`flex justify-between py-5 w-full font-medium text-left  border-gray-800  border-b-2 text-gray-800`}
          onClick={onClick}
        >
          <h2 className="text-2xl font-bold">{heading}</h2>
          <svg
            className={`w-5 h-5  shrink-0 transition-all duration-500 ease-in-out hover:text-orange-500 ${
              isOpen ? "-scale-y-100 text-orange-500" : "text-sky-700"
            } `}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          data-testid="info"
          className={`overflow-hidden ${
            isOpen ? "is-active" : ""
          } transition-all duration-500 ease-in-out`}
          style={
            isOpen
              ? { height: contentHeight?.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          <div ref={contentHeight} className="max-w-lg py-8">
            <p className="mb-2 text-gray-500 text-lg ">{info}</p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button
                className="accordion--button-primary "
                title={"Learn more"}
                color="cyan"
              />
              <Button
                className="accordion--button-secondary text-neutral-700"
                title={"Get started"}
                color="amber"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        data-testid="image"
        className={`accordion--image${index} hidden md:block  flex-1 flex-grow overflow-hidden ${
          isOpen ? "accordion-item--active" : "accordion-item--inactive"
        }`}
      >
        <img className="h-100" src={image} alt="accordion image" />
      </div>
    </div>
  );
};

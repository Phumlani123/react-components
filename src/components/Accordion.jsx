import { useEffect, useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { accordionData } from "../utils";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion--wrapper">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          heading={item.heading}
          info={item.info}
          image={item.image}
          isOpen={activeIndex === index}
          index={index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

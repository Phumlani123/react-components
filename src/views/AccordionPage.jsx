import { Accordion } from "../components";
export const AccordionPage = () => {
  return (
    <div className="max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-32 rounded-xl mx-auto bg-slate-50 px-8 md:px-16 py-24">
      <div className="md:text-center">
        <h2 className="font-bold text-3xl text-gray-800">
          Connecting the industry through digital closing solutions
        </h2>
        <p className="my-4 mb-16">
          Select your organization type to learn how Snapdocs can help you save
          time and money on every transaction.
        </p>
      </div>
      <Accordion />
    </div>
  );
};

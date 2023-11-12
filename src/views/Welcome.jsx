import { Button } from "../components";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="relative px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Please select to see the component
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-2 items-center justify-center gap-x-6">
            <Button
              className={"bg-amber-500 rounded-lg text-white font-bold"}
              onClick={() => navigate("/hero-banner")}
              title={"Hero banner"}
            />
            <Button
              className={"bg-cyan-500 rounded-lg text-white font-bold"}
              onClick={() => navigate("/accordion")}
              title={"Accordion"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

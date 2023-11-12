import { Button } from "../components";
import { useNavigate } from "react-router-dom";

export const PageError = () => {
  const navigate = useNavigate();
  return (
    <div className="relative px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Sorry, this page is not available
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row gap-2 items-center justify-center gap-x-6">
            <Button
              className={"bg-red-600 rounded-lg text-white font-bold"}
              onClick={() => navigate("/")}
              title={"Click to go back"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

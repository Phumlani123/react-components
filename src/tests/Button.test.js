import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Button", () => {
  it("renders Button component", () => {
    render(<Button />);
  });

  it("renders Button component with title", () => {
    render(<Button title={"Click Me"} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});

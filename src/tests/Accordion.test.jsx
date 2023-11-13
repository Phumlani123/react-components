import { render, screen } from "@testing-library/react";
import { Accordion } from "../components/Accordion";

describe("Accordion", () => {
  it("renders Accordion component", () => {
    render(<Accordion />);

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
  });
});

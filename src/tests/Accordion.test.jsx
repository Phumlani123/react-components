import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion } from "../components/Accordion";

describe("Accordion", () => {
  it("renders Accordion component", () => {
    render(<Accordion />);

    expect(screen.getByTestId("accordion")).toBeInTheDocument();
  });

  it("renders accordion item info and image onClick", () => {
    render(<Accordion />);

    const image = screen.getAllByTestId("image");
    const info = screen.getAllByTestId("info");
    const button = screen.getAllByTestId("info-button");
    fireEvent.click(button[1]);

    expect(info[1]).toHaveClass("is-active");
    expect(image[1]).toHaveClass("accordion-item--active");
  });
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AccordionItem } from "../components/AccordionItem";

const clickEvent = jest.fn();

describe("AccordionItem", () => {
  it("renders AccordionItem component", () => {
    render(<AccordionItem />);
  });

  it("renders AccordionItem component with heading", () => {
    render(<AccordionItem heading={"I am an accordion item"} />);
    expect(screen.getByText("I am an accordion item")).toBeInTheDocument();
  });

  it("renders AccordionItem component with info hidden", () => {
    render(<AccordionItem info={"I am an accordion item"} />);
    const info = screen.getByTestId("info");
    expect(info).toHaveStyle("height: 0px");
  });

  it("renders AccordionItem component with info visible onClick", async () => {
    render(
      <AccordionItem
        heading={"heading"}
        index={1}
        info={"I am an accordion item"}
        onClick={clickEvent}
      />
    );
    const button = screen.getByTestId("info-button");
    fireEvent.click(button);

    expect(clickEvent).toHaveBeenCalled();
  });

  // it("renders accordion item image", async () => {
  //   render(
  //     <AccordionItem
  //       index={1}
  //       info={"I am an accordion item"}
  //       heading={"heading"}
  //       image={"https://via.placeholder.com/150"}
  //       onClick={clickEvent}
  //     />
  //   );
  //   const image = await screen.findByTestId("image");
  //   const button = await screen.findByTestId("info-button");
  //   fireEvent.click(button);
  //   await waitFor(() => {
  //     expect(image).toHaveClass("accordion-item--active");
  //   });
  // });
});

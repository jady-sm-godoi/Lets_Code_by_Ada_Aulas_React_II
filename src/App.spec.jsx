import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Jest", () => {
  it("testing jest", () => {
    expect(1).toBe(1);
  });
});

describe("<App />", () => {
  it("should display elements", () => {
    render(<App />);
    expect(screen.getByText("Salvar informações de login")).toBeInTheDocument();
  });
});

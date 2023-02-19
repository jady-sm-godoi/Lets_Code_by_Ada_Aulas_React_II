import { render, screen } from "@testing-library/react";
import { Text } from "./text";

describe("Text", () => {
  describe("success cases", () => {
    it("should render a string", () => {
      render(<Text>Esse é um conteúdo tipo children</Text>);
      screen.debug();
      expect(screen.getByText("Esse é um conteúdo tipo children")).toBeTruthy();
    });
  });
});

import { render, screen } from "@testing-library/react";
import FormError from "./FormError";

describe("Given the FormError component", () => {
  describe("When it receives a message 'error'", () => {
    test("Then it should show an 'error' text", () => {
      render(<FormError message="error" />);

      const textElement = screen.getByText("error");

      expect(textElement).toBeVisible();
    });
  });
});

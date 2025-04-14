import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokemon' inside a level 1 heading'", () => {
      render(<App />);

      const appTitle = screen.getByRole("heading", {
        name: /pokemon/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});

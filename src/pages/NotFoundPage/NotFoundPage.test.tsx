import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Page not found' inside a heading", () => {
      render(<NotFoundPage />);

      const pageTitle = screen.getByRole("heading", {
        name: /page not found/i,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show a gif of psyduck confused", () => {
      render(<NotFoundPage />);

      const pageImage = screen.getByAltText("psyduck confused");

      expect(pageImage).toBeVisible();
    });
  });
});

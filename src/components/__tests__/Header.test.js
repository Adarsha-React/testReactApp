import { render } from "@testing-library/react";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on render", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  expect(logo.src).toBe("http://localhost/dummyImage.png");
});

test("Check whether the search box present", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );

  const search = header.getByTestId("search");
  expect(search.placeholder).toBe("Search");
  console.log(search);
});

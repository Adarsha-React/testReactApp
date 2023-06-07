import { render } from "@testing-library/react";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on render", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );

  console.log(header);
});

import { render } from "@testing-library/react";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utilities/store";
import { Provider } from "react-redux";

test("Logo should load on render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  expect(logo.src).toBe("http://localhost/dummyImage.png");
});

test("Cart should have 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");

  console.log(cart);
});

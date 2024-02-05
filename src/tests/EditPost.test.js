import { screen, render } from "@testing-library/react";
import EditPost from "../Pages/AdminPanel/EditPost/EditPost";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

jest.mock("axios");
test("it should render page with information about selected post", async () => {
  axios.get.mockResolvedValueOnce({
    status: 200,
    data: {
      english: {
        title: "English title",
        description: "English description",
        shortDescription: "English short description",
      },
      ukrainian: {
        title: "Укранїнський заголовок",
        description: "Укранїнський опис",
        shortDescription: "Укранїнський короткий опис",
      },
      timestamp: 1643852232000,
      photos: [
        "https://res.cloudinary.com/dx03vy5vs/image/upload/v1705334903/brwzyuojagoza77xfnhd.jpg",
        "https://res.cloudinary.com/dx03vy5vs/image/upload/v1705334903/djeaacszf95dcumb5l0b.jpg",
        "https://res.cloudinary.com/dx03vy5vs/image/upload/v1705334903/xhqfqpk0wvhrz3dp9pnd.png",
      ],
    },
  });
  render(
    <MemoryRouter>
      <EditPost />
    </MemoryRouter>,
  );

  await screen.findByRole("heading");
  await screen.findByRole("textbox", {
    name: /заголовок \(українською\)/i,
  });
  screen.debug();
  // screen.logTestingPlaygroundURL();
});

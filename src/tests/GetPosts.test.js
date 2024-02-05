import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GetPosts from "../Pages/AdminPanel/GetPosts/GetPosts";
import axios from "axios";

jest.mock("axios");

test("it should display 2 projects", async () => {
  // Mock the response from axios.get
  axios.get.mockResolvedValueOnce({
    data: [
      {
        _id: 5461,
        title: "Музеї Франка",
        shortDescription: "Короткий опис музеї франка",
        timestamp: 1643855832000,
      },
      {
        _id: 4566,
        title: "Щось там ще",
        shortDescription: "Короткий опис щось там ще",
        timestamp: 1643852232000,
      },
    ],
    status: 200,
  });

  // Render the component
  render(
    <MemoryRouter>
      <GetPosts />
    </MemoryRouter>,
  );

  const projects = await screen.findAllByRole("listitem");
  for (const listitem of projects) expect(listitem).toBeInTheDocument();
});

import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Post from "../Pages/AdminPanel/GetPosts/Post/Post";

test("it should display post title with information passed via props", () => {
  const post = {
    _id: 5461,
    title: "Музеї Франка",
    shortDescription: "Короткий опис музеї франка",
    timestamp: 1643855832000,
  };
  render(
    <MemoryRouter>
      <Post post={post} />
    </MemoryRouter>,
  );

  const title = screen.getByText(new RegExp(post.title));
  expect(title).toBeInTheDocument();
});

test("it should display two buttons delete and edit on the post", () => {
  const post = {
    _id: 5461,
    title: "Музеї Франка",
    shortDescription: "Короткий опис музеї франка",
    timestamp: 1643855832000,
  };
  render(
    <MemoryRouter>
      <Post post={post} />
    </MemoryRouter>,
  );

  const buttons = [
    screen.getByRole("button", { name: /видалити/i }),
    screen.getByRole("link", { name: /редагувати/i }),
  ];

  for (const btn of buttons) expect(btn).toBeInTheDocument();
});

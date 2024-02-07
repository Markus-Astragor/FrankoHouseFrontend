import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Post from "../Pages/AdminPanel/GetPosts/Post/Post";
import userEvent from "@testing-library/user-event";

function renderPost() {
  const deleteFunction = jest.fn();

  const post = {
    _id: 5461,
    title: "Музеї Франка",
    shortDescription: "Короткий опис музеї франка",
    timestamp: 1643855832000,
  };

  render(
    <MemoryRouter>
      <Post handlePostDelete={deleteFunction} post={post} />
    </MemoryRouter>,
  );

  return [post, deleteFunction];
}

test("it should display post title with information passed via props", () => {
  const [postData] = renderPost();
  const title = screen.getByText(new RegExp(postData.title));
  expect(title).toBeInTheDocument();
});

test("it should display two buttons delete and edit on the post", () => {
  renderPost();

  const buttons = [
    screen.getByRole("button", { name: /видалити/i }),
    screen.getByRole("link", { name: /редагувати/i }),
  ];

  for (const btn of buttons) expect(btn).toBeInTheDocument();
});

test("it should call deleteFunction when we click on the delete button with correct id", () => {
  const [post, deleteFn] = renderPost();

  const deleteBtn = screen.getByRole("button", {
    name: /видалити/i,
  });

  expect(deleteBtn).toBeInTheDocument();

  userEvent.click(deleteBtn);
  expect(deleteFn).toBeCalledWith(post._id);
});

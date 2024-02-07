import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Confirmation from "../components/ConfirmationWindow/Confirmation";
test("it should display confirmation window that should display two buttons ok and cancel", () => {
  render(<Confirmation />);

  const elements = [
    screen.getByText(/Ви впевнені що хочете видалити публікацію?/i),
    screen.getByRole("button", { name: /видалити/i }),
    screen.getByRole("button", { name: /відмінити/i }),
  ];

  for (const element of elements) expect(element).toBeInTheDocument();
});

test("it should execute function clicking on delete button and execute function clicking on cancel button", () => {
  const deleteFn = jest.fn();
  const cancelFn = jest.fn();
  render(<Confirmation onDelete={deleteFn} onCancel={cancelFn} />);

  const deleteButton = screen.getByRole("button", { name: /видалити/i });
  const cancelButton = screen.getByRole("button", { name: /відмінити/i });

  userEvent.click(deleteButton);
  expect(deleteFn).toHaveBeenCalledTimes(1);

  userEvent.click(cancelButton);
  expect(cancelFn).toHaveBeenCalledTimes(1);
});

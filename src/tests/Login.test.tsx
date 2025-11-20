import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "../components/login-form";
import { vi } from "vitest";

// mock useAuth
vi.mock("../context/auth-context", () => ({
  useAuth: () => ({
    login: vi.fn(),
  }),
}));

test("shows validation message for invalid email", async () => {
  const user = userEvent.setup();

  render(<LoginForm onSuccess={() => {}} />);

  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");
  const submitBtn = screen.getByRole("button", { name: /login/i });

  // FIX: use keyboard instead of type
  await user.click(emailInput);
  await user.keyboard("wrongemail");

  await user.click(passwordInput);
  await user.keyboard("Test1234");

  await user.click(submitBtn);

  expect(
    await screen.findByText(/please enter a valid email/i)
  ).toBeInTheDocument();
});

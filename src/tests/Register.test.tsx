import { render, screen, fireEvent } from "@testing-library/react";
import { RegisterPage } from "../pages/register-page";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/auth-context";
import { vi } from "vitest";

test("shows error when passwords do not match", async () => {
  const mockNavigate = vi.fn();

  render(
    <AuthProvider>
      <BrowserRouter>
        <RegisterPage onNavigate={mockNavigate} />
      </BrowserRouter>
    </AuthProvider>
  );

  // Required fields — your form validates them
  fireEvent.change(screen.getByLabelText("Full Name"), {
    target: { value: "John Doe" },
  });

  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "john@example.com" },
  });

  // Password
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "12345678A" }, // valid password for your validator
  });

  // Confirm Password
  fireEvent.change(screen.getByLabelText("Confirm Password"), {
    target: { value: "wrongpass" },
  });

  // Submit
  fireEvent.click(screen.getByRole("button", { name: /register/i }));

  // Expect mismatch error
  expect(
    await screen.findByText(/Passwords do not match/i)
  ).toBeInTheDocument();
});

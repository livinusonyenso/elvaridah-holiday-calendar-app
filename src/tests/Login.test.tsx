import { render, screen, fireEvent } from "@testing-library/react"
import { vi, expect, test } from "vitest"
import { LoginForm } from "../components/login-form"
// 1. Import the validators module so we can control the mock
import * as validators from "../utils/validators"

// 2. Mock the validators module
vi.mock("../utils/validators", () => ({
  validateEmail: vi.fn(),
  validatePassword: vi.fn(),
}))

vi.mock("../context/auth-context", () => ({
  useAuth: () => ({
    login: vi.fn(() => Promise.resolve()),
  }),
}))

test("shows validation message for invalid email", async () => {
  const onSuccess = vi.fn()

  // 3. EXPLICITLY set the mock return values for this test.
  // We force validateEmail to return 'false' to guarantee the error branch executes.
  vi.mocked(validators.validateEmail).mockReturnValue(false)
  vi.mocked(validators.validatePassword).mockReturnValue(true)

  render(<LoginForm onSuccess={onSuccess} />)

  fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
    target: { value: "wrongemail" },
  })

  fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
    target: { value: "Test1234" },
  })

  // Use fireEvent.submit on the form instead of click on button
  const form = screen.getByRole("button", { name: /login/i }).closest("form")!
  fireEvent.submit(form)

  // 4. findByText waits for the async state update (setErrors) to complete
  expect(
    await screen.findByText(/please enter a valid email/i)
  ).toBeInTheDocument()
})
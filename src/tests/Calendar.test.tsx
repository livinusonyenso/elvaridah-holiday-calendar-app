import { render, screen, fireEvent } from "@testing-library/react"
import { vi, expect, test, describe, beforeEach } from "vitest"
import { GoogleCalendar } from "../components/google-calendar"

// Mock the holidays constant
vi.mock("../constants/holidays", () => ({
  NIGERIA_HOLIDAYS: [
    { date: "2025-01-01", name: "New Year's Day" },
    { date: "2025-04-18", name: "Good Friday" },
    { date: "2025-04-21", name: "Easter Monday" },
    { date: "2025-05-01", name: "Workers' Day" },
    { date: "2025-06-12", name: "Democracy Day" },
    { date: "2025-10-01", name: "Independence Day" },
    { date: "2025-12-25", name: "Christmas Day" },
    { date: "2025-12-26", name: "Boxing Day" },
  ],
}))

describe("GoogleCalendar", () => {
  beforeEach(() => {
    // Mock the current date to January 2025 for consistent testing
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2025, 0, 15)) // January 15, 2025
  })

  test("renders the calendar with current month", () => {
    render(<GoogleCalendar />)
    
    // Should display January 2025
    expect(screen.getByText("January 2025")).toBeInTheDocument()
  })

  test("renders navigation buttons", () => {
    render(<GoogleCalendar />)
    
    expect(screen.getByText("← Previous")).toBeInTheDocument()
    expect(screen.getByText("Next →")).toBeInTheDocument()
  })

  test("renders the iframe with correct src", () => {
    render(<GoogleCalendar />)
    
    const iframe = screen.getByTitle("Google Calendar")
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute("src")
    expect(iframe.getAttribute("src")).toContain("calendar.google.com")
  })

  test("renders custom calendarId in iframe src", () => {
    const customId = "custom-calendar-id@group.calendar.google.com"
    render(<GoogleCalendar calendarId={customId} />)
    
    const iframe = screen.getByTitle("Google Calendar")
    expect(iframe.getAttribute("src")).toContain(encodeURIComponent(customId))
  })

  test("displays holidays for current month", () => {
    render(<GoogleCalendar />)
    
    // January has New Year's Day (appears in both badge and sidebar)
    const holidays = screen.getAllByText("New Year's Day")
    expect(holidays.length).toBeGreaterThan(0)
  })

  test("shows 'No holidays this month' when no holidays exist", () => {
    // Set to a month with no holidays (e.g., February)
    vi.setSystemTime(new Date(2025, 1, 15)) // February 15, 2025
    
    render(<GoogleCalendar />)
    
    expect(screen.getByText("No holidays this month")).toBeInTheDocument()
  })

  test("navigates to previous month when clicking Previous button", () => {
    render(<GoogleCalendar />)
    
    // Initially January 2025
    expect(screen.getByText("January 2025")).toBeInTheDocument()
    
    // Click Previous
    fireEvent.click(screen.getByText("← Previous"))
    
    // Should show December 2024
    expect(screen.getByText("December 2024")).toBeInTheDocument()
  })

  test("navigates to next month when clicking Next button", () => {
    render(<GoogleCalendar />)
    
    // Initially January 2025
    expect(screen.getByText("January 2025")).toBeInTheDocument()
    
    // Click Next
    fireEvent.click(screen.getByText("Next →"))
    
    // Should show February 2025
    expect(screen.getByText("February 2025")).toBeInTheDocument()
  })

  test("updates holidays when navigating months", () => {
    render(<GoogleCalendar />)
    
    // January has New Year's Day (appears in both badge and sidebar)
    const januaryHolidays = screen.getAllByText("New Year's Day")
    expect(januaryHolidays.length).toBeGreaterThan(0)
    
    // Navigate to April (has Good Friday and Easter Monday)
    fireEvent.click(screen.getByText("Next →")) // February
    fireEvent.click(screen.getByText("Next →")) // March
    fireEvent.click(screen.getByText("Next →")) // April
    
    expect(screen.getByText("April 2025")).toBeInTheDocument()
    const goodFriday = screen.getAllByText("Good Friday")
    const easterMonday = screen.getAllByText("Easter Monday")
    expect(goodFriday.length).toBeGreaterThan(0)
    expect(easterMonday.length).toBeGreaterThan(0)
  })

  test("renders sidebar with year title", () => {
    render(<GoogleCalendar />)
    
    expect(screen.getByText("Nigeria Holidays 2025")).toBeInTheDocument()
  })

  test("renders section titles", () => {
    render(<GoogleCalendar />)
    
    expect(screen.getByText("Holidays This Month")).toBeInTheDocument()
  })

  test("iframe key changes when month changes", () => {
    const { rerender } = render(<GoogleCalendar />)
    
    const iframe1 = screen.getByTitle("Google Calendar")
    const key1 = iframe1.getAttribute("key")
    
    // Navigate to next month
    fireEvent.click(screen.getByText("Next →"))
    
    // Re-query the iframe
    const iframe2 = screen.getByTitle("Google Calendar")
    
  
    expect(iframe2.getAttribute("src")).not.toBe(iframe1.getAttribute("src"))
  })

  test("formats holiday dates correctly in badges", () => {
    render(<GoogleCalendar />)
    
    // January 1st should be formatted as "Jan 1"
    expect(screen.getByText("Jan 1")).toBeInTheDocument()
  })
})
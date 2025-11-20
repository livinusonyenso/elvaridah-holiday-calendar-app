// Mock data for development and testing
export const MOCK_USERS = [
  {
    id: "user-001",
    email: "john.doe@example.com",
    name: "John Doe",
    password: "password123",
  },
  {
    id: "user-002",
    email: "jane.smith@example.com",
    name: "Jane Smith",
    password: "password123",
  },
  {
    id: "user-003",
    email: "alex.johnson@example.com",
    name: "Alex Johnson",
    password: "password123",
  },
]

export interface MockEvent {
  id: string
  title: string
  description: string
  start: Date
  end: Date
  location?: string
  attendees?: string[]
  category: "work" | "personal" | "meeting" | "holiday"
}

export const MOCK_EVENTS: MockEvent[] = [
  {
    id: "event-001",
    title: "Team Standup",
    description: "Daily team sync-up meeting",
    start: new Date(2024, 10, 20, 9, 0),
    end: new Date(2024, 10, 20, 9, 30),
    location: "Zoom",
    attendees: ["john.doe@example.com", "jane.smith@example.com"],
    category: "meeting",
  },
  {
    id: "event-002",
    title: "Project Review",
    description: "Q4 project review and planning",
    start: new Date(2024, 10, 21, 14, 0),
    end: new Date(2024, 10, 21, 15, 30),
    location: "Conference Room A",
    attendees: ["john.doe@example.com", "alex.johnson@example.com"],
    category: "work",
  },
  {
    id: "event-003",
    title: "Lunch with Maria",
    description: "Catch up over lunch",
    start: new Date(2024, 10, 22, 12, 0),
    end: new Date(2024, 10, 22, 13, 0),
    location: "Downtown Cafe",
    category: "personal",
  },
  {
    id: "event-004",
    title: "Client Presentation",
    description: "Present Q4 results to client",
    start: new Date(2024, 10, 23, 10, 0),
    end: new Date(2024, 10, 23, 11, 30),
    location: "Client Office",
    attendees: ["jane.smith@example.com"],
    category: "work",
  },
  {
    id: "event-005",
    title: "Workout",
    description: "Gym session",
    start: new Date(2024, 10, 24, 17, 30),
    end: new Date(2024, 10, 24, 18, 30),
    location: "Fitness Center",
    category: "personal",
  },
  {
    id: "event-006",
    title: "1:1 with Manager",
    description: "Monthly 1:1 check-in",
    start: new Date(2024, 10, 25, 15, 0),
    end: new Date(2024, 10, 25, 15, 45),
    location: "Manager's Office",
    attendees: ["john.doe@example.com"],
    category: "meeting",
  },
  {
    id: "event-007",
    title: "Code Review Session",
    description: "Review pull requests from team",
    start: new Date(2024, 10, 26, 11, 0),
    end: new Date(2024, 10, 26, 12, 0),
    location: "Zoom",
    attendees: ["alex.johnson@example.com"],
    category: "work",
  },
  {
    id: "event-008",
    title: "Birthday Party",
    description: "Sarah's birthday celebration",
    start: new Date(2024, 10, 27, 18, 0),
    end: new Date(2024, 10, 27, 22, 0),
    location: "Central Restaurant",
    category: "personal",
  },
]

export const MOCK_CALENDAR_SETTINGS = {
  timezone: "Africa/Lagos",
  theme: "light",
  notifications: true,
  workHoursStart: 9,
  workHoursEnd: 18,
}

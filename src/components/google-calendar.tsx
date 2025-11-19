import { useEffect, useRef, useState } from 'react'
import { NIGERIA_HOLIDAYS } from '../constants/holidays'

interface GoogleCalendarProps {
  calendarId?: string
}

export function GoogleCalendar({ calendarId }: GoogleCalendarProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [holidayEvents, setHolidayEvents] = useState<Array<{ date: string; name: string }>>([])

  useEffect(() => {
    // Filter holidays for current year
    const currentYear = currentDate.getFullYear()
    const holidays = NIGERIA_HOLIDAYS.filter((holiday) => {
      const holidayYear = new Date(holiday.date).getFullYear()
      return holidayYear === currentYear
    })
    setHolidayEvents(holidays)
  }, [currentDate])

  // Generate Google Calendar embed URL
  const getCalendarUrl = () => {
    // Use Google Calendar public embed with Nigeria timezone
    // If calendarId is provided, use it; otherwise use the default public calendar
    const src = calendarId 
      ? encodeURIComponent(calendarId)
      : 'en.ng%23holiday%40group.v.calendar.google.com' // Nigeria public holidays calendar
    
    // Get current date for navigation
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    
return `https://calendar.google.com/calendar/embed?src=${src}&ctz=Africa%2FLagos&mode=MONTH&wkst=1&bgcolor=%23ffffff&color=%23A32929`
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const currentMonthHolidays = holidayEvents.filter((holiday) => {
    const holidayDate = new Date(holiday.date)
    return (
      holidayDate.getMonth() === currentDate.getMonth() &&
      holidayDate.getFullYear() === currentDate.getFullYear()
    )
  })

  return (
    <div className="calendar-container">
      <div className="calendar-main">
        <div className="calendar-header">
          <button onClick={previousMonth} className="nav-button">
            ← Previous
          </button>
          <h2>{monthName}</h2>
          <button onClick={nextMonth} className="nav-button">
            Next →
          </button>
        </div>
        
        <div className="google-calendar-wrapper">
          <iframe
            ref={iframeRef}
            key={`${currentDate.getFullYear()}-${currentDate.getMonth()}`}
            src={getCalendarUrl()}
            style={{
              border: '0',
              width: '100%',
              height: '600px',
              borderRadius: '8px',
            }}
            title="Google Calendar"
            frameBorder="0"
            scrolling="no"
          />
          <div className="calendar-note">
            <p>
              <strong>Note:</strong> To view your personal Google Calendar, you need to make your calendar public or use your calendar ID. 
              Currently showing Nigeria public holidays calendar.
            </p>
          </div>
        </div>

        <div className="holidays-overlay-info">
          <h3>Nigeria Public Holidays This Month</h3>
          <div className="holidays-grid">
            {currentMonthHolidays.length > 0 ? (
              currentMonthHolidays.map((holiday) => (
                <div key={holiday.date} className="holiday-badge">
                  <span className="holiday-date-badge">
                    {new Date(holiday.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="holiday-name-badge">{holiday.name}</span>
                </div>
              ))
            ) : (
              <p className="no-holidays">No holidays this month</p>
            )}
          </div>
        </div>
      </div>

      <aside className="holidays-sidebar">
        <h3>Nigeria Holidays {currentDate.getFullYear()}</h3>
        {holidayEvents.length > 0 ? (
          <ul className="holidays-list">
            {holidayEvents.map((holiday) => (
              <li
                key={holiday.date}
                className={`holiday-item ${
                  new Date(holiday.date).getMonth() === currentDate.getMonth()
                    ? 'current-month'
                    : ''
                }`}
              >
                <div className="holiday-date">{holiday.date}</div>
                <div className="holiday-name">{holiday.name}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-holidays">No holidays available</p>
        )}
      </aside>
    </div>
  )
}


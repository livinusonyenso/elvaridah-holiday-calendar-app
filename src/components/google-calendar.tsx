import { useEffect, useRef, useState } from "react";
import { NIGERIA_HOLIDAYS } from "../constants/holidays";
import "./GoogleCalendar.css";

interface GoogleCalendarProps {
  calendarId?: string;
}

export function GoogleCalendar({ calendarId }: GoogleCalendarProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [holidayEvents, setHolidayEvents] = useState<
    Array<{ date: string; name: string }>
  >([]);

  useEffect(() => {
    const currentYear = currentDate.getFullYear();
    const filtered = NIGERIA_HOLIDAYS.filter((h) => {
      return new Date(h.date).getFullYear() === currentYear;
    });
    setHolidayEvents(filtered);
  }, [currentDate]);

 const getCalendarUrl = () => {
  const src = calendarId
    ? encodeURIComponent(calendarId)
    : "en.ng%23holiday%40group.v.calendar.google.com";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0–11

  // First day of month
  const start = new Date(year, month, 1);
  // Last day of month
  const end = new Date(year, month + 1, 0);

  // Convert to YYYYMMDD format
  const format = (d: Date) =>
    `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(
      d.getDate()
    ).padStart(2, "0")}`;

  const startStr = format(start);
  const endStr = format(end);

  return `https://calendar.google.com/calendar/embed?src=${src}&ctz=Africa%2FLagos&color=%23CCA45C&bgcolor=%23ffffff&mode=MONTH&dates=${startStr}/${endStr}`;
};


  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const currentMonthHolidays = holidayEvents.filter((h) => {
    const d = new Date(h.date);
    return (
      d.getMonth() === currentDate.getMonth() &&
      d.getFullYear() === currentDate.getFullYear()
    );
  });

  return (
    <div className="gc-container">
      <div className="gc-main">
        <div className="gc-header">
          <button className="gc-nav-btn" onClick={prevMonth}>
            ← Previous
          </button>

          <h2 className="gc-title">{monthName}</h2>

          <button className="gc-nav-btn" onClick={nextMonth}>
            Next →
          </button>
        </div>

        <div className="gc-iframe-wrapper">
          <iframe
            ref={iframeRef}
            key={`${currentDate.getFullYear()}-${currentDate.getMonth()}`}
            src={getCalendarUrl()}
            className="gc-iframe"
            title="Google Calendar"
          />
        </div>

        <div className="gc-overlay">
          <h3 className="gc-section-title">Holidays This Month</h3>

          <div className="gc-holiday-grid">
            {currentMonthHolidays.length ? (
              currentMonthHolidays.map((h) => (
                <div key={h.date} className="gc-holiday-badge">
                  <span className="gc-holiday-date">
                    {new Date(h.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="gc-holiday-name">{h.name}</span>
                </div>
              ))
            ) : (
              <p className="gc-no-holidays">No holidays this month</p>
            )}
          </div>
        </div>
      </div>

      <aside className="gc-sidebar">
        <h3 className="gc-section-title">
          Nigeria Holidays {currentDate.getFullYear()}
        </h3>

        <ul className="gc-holiday-list">
          {currentMonthHolidays.map((h) => {
            const sameMonth =
              new Date(h.date).getMonth() === currentDate.getMonth();
            return (
              <li
                key={h.date}
                className={`gc-holiday-item ${sameMonth ? "active" : ""}`}
              >
                <div className="gc-item-date">{h.date}</div>
                <div className="gc-item-name">{h.name}</div>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

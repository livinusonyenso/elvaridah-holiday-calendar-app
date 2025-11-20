export interface Holiday {
  id: string;
  date: string;
  name: string;
}

export const NIGERIA_HOLIDAYS: Holiday[] = [
  /* ======================= 2024 ======================= */
  { id: "2024-01-01", date: "2024-01-01", name: "New Year's Day" },
  { id: "2024-03-29", date: "2024-03-29", name: "Good Friday" },
  { id: "2024-04-01", date: "2024-04-01", name: "Easter Monday" },
  { id: "2024-04-10", date: "2024-04-10", name: "Eid-el-Fitr" },
  { id: "2024-04-11", date: "2024-04-11", name: "Eid-el-Fitr Holiday" },
  { id: "2024-05-01", date: "2024-05-01", name: "Worker's Day" },
  { id: "2024-06-12", date: "2024-06-12", name: "Democracy Day" },
  { id: "2024-06-16", date: "2024-06-16", name: "Eid-el-Kabir" },
  { id: "2024-06-17", date: "2024-06-17", name: "Eid-el-Kabir Holiday" },
  { id: "2024-10-01", date: "2024-10-01", name: "Independence Day" },
  { id: "2024-12-25", date: "2024-12-25", name: "Christmas Day" },
  { id: "2024-12-26", date: "2024-12-26", name: "Boxing Day" },

  /* ======================= 2025 ======================= */
  { id: "2025-01-01", date: "2025-01-01", name: "New Year's Day" },

  // Eid-el-Fitr 2025 (Estimated: 30 March* — 1 April may shift ±1 day)
  { id: "2025-03-31", date: "2025-03-31", name: "Eid-el-Fitr *Estimated*" },
  { id: "2025-04-01", date: "2025-04-01", name: "Eid-el-Fitr Holiday *Estimated*" },

  // Easter 2025 (Accurate)
  { id: "2025-04-18", date: "2025-04-18", name: "Good Friday" },
  { id: "2025-04-21", date: "2025-04-21", name: "Easter Monday" },

  { id: "2025-05-01", date: "2025-05-01", name: "Worker's Day" },
  { id: "2025-06-12", date: "2025-06-12", name: "Democracy Day" },

  // Eid-el-Kabir 2025 (Estimated: 6–7 June)
  { id: "2025-06-06", date: "2025-06-06", name: "Eid-el-Kabir *Estimated*" },
  { id: "2025-06-07", date: "2025-06-07", name: "Eid-el-Kabir Holiday *Estimated*" },

  { id: "2025-10-01", date: "2025-10-01", name: "Independence Day" },
  { id: "2025-12-25", date: "2025-12-25", name: "Christmas Day" },
  { id: "2025-12-26", date: "2025-12-26", name: "Boxing Day" },

  /* ======================= 2026 ======================= */
  { id: "2026-01-01", date: "2026-01-01", name: "New Year's Day" },

  // Ramadan ends around 19 Feb 2026 → Eid Feb 20 ± 1 day
  { id: "2026-02-20", date: "2026-02-20", name: "Eid-el-Fitr *Estimated*" },
  { id: "2026-02-21", date: "2026-02-21", name: "Eid-el-Fitr Holiday *Estimated*" },

  // Easter 2026 (Accurate)
  { id: "2026-04-03", date: "2026-04-03", name: "Good Friday" },
  { id: "2026-04-06", date: "2026-04-06", name: "Easter Monday" },

  { id: "2026-05-01", date: "2026-05-01", name: "Worker's Day" },
  { id: "2026-06-12", date: "2026-06-12", name: "Democracy Day" },

  // Eid-el-Kabir 2026 (Estimated: May 28–29)
  { id: "2026-05-28", date: "2026-05-28", name: "Eid-el-Kabir *Estimated*" },
  { id: "2026-05-29", date: "2026-05-29", name: "Eid-el-Kabir Holiday *Estimated*" },

  { id: "2026-10-01", date: "2026-10-01", name: "Independence Day" },
  { id: "2026-12-25", date: "2026-12-25", name: "Christmas Day" },
  { id: "2026-12-26", date: "2026-12-26", name: "Boxing Day" },
];

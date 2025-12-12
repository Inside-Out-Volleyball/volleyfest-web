export type Wave = {
  division: string;
  start: string;
  location?: string;
};

export const wavesDecided = false; // Set to true when waves are finalized

export const waves: Wave[] = [
  { division: "12 Classic", start: "3:00 PM" },
  { division: "12 Club", start: "3:00 PM" },
  { division: "12 Premier/Open", start: "3:00 PM" },
  { division: "13 Classic Red", start: "8:00 AM" },
  { division: "13 Classic Blue", start: "8:00 AM" },
  { division: "13 Club", start: "8:00 AM" },
  { division: "13 Premier/Open", start: "8:00 AM" },
  { division: "14 Classic Red", start: "3:00 PM" },
  { division: "14 Classic Blue", start: "3:00 PM" },
  { division: "14 Club", start: "3:00 PM" },
  { division: "14 Open/Premier", start: "3:00 PM" },
  { division: "15 Classic", start: "3:00 PM" },
  { division: "15 Club", start: "3:00 PM" },
  { division: "15 Open/Premier", start: "3:00 PM" },
  { division: "16 Classic", start: "8:00 AM" },
  { division: "16 Club", start: "8:00 AM" },
  { division: "16 Premier", start: "8:00 AM" },
  { division: "16 Open", start: "8:00 AM" },
  { division: "17 Classic", start: "8:00 AM" },
  { division: "17 Club", start: "8:00 AM" },
  { division: "17 Premier", start: "8:00 AM" },
  { division: "17 Open", start: "8:00 AM" },
  { division: "18 Club", start: "8:00 AM" },
  { division: "18 Premier", start: "8:00 AM" },
  { division: "18 Open", start: "8:00 AM", location: "DeVos Place" },
];

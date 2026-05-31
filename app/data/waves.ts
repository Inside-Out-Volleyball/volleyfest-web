export type Wave = {
  division: string;
  start: string;
  location?: string;
};

export const wavesDecided = false; // Set to true when waves are finalized

export const waveTimes = [
  { wave: "AM", time: "8:00 AM", color: "green" },
  { wave: "PM", time: "3:00 PM", color: "blue" },
];

export const waves: Wave[] = [
  { division: "11 Club", start: "AM", location: "MSA Sport Spot" },
  { division: "12 Classic", start: "AM", location: "Impact Dynamic" },
  { division: "12 Club", start: "AM", location: "DeVos/Northview" },
  { division: "12 Premier/Open", start: "AM", location: "DeVos Place" },
  { division: "13 Classic", start: "PM", location: "GVSU/DeVos" },
  { division: "13 Aspire", start: "PM", location: "SOMI/DeVos" },
  { division: "13 Club", start: "PM", location: "Byron Center/DeVos" },
  { division: "13 Premier/Open", start: "PM", location: "DeVos Place" },
  { division: "14 Classic Blue", start: "PM", location: "MSA Sport Spot/DeVos" },
  { division: "14 Classic Red", start: "PM", location: "Impact Dynamic" },
  { division: "14 Aspire", start: "PM", location: "Jenison/DeVos" },
  { division: "14 Club", start: "PM", location: "Aquinas/Devos" },
  { division: "14 Premier", start: "PM", location: "DeVos Place" },
  { division: "14 Open", start: "PM", location: "DeVos Place" },
  { division: "15 Classic Blue", start: "PM", location: "Northview/DeVos" },
  { division: "15 Classic Red", start: "PM", location: "GRCC" },
  { division: "15 Aspire", start: "PM", location: "East Kentwood/DeVos" },
  { division: "15 Club", start: "PM", location: "DeVos Place" },
  { division: "15 Premier", start: "PM", location: "DeVos Place" },
  { division: "15 Open", start: "PM", location: "DeVos Place" },
  { division: "16 Classic Blue", start: "AM", location: "East Kentwood" },
  { division: "16 Classic Red", start: "AM", location: "Aquinas" },
  { division: "16 Aspire", start: "AM", location: "GVSU/DeVos" },
  { division: "16 Club", start: "AM", location: "SOMI/Byron Center/DeVos" },
  { division: "16 Premier", start: "AM", location: "DeVos Place" },
  { division: "16 Open", start: "AM", location: "DeVos Place" },
  { division: "17 Aspire", start: "AM", location: "GRCC/DeVos" },
  { division: "17 Club", start: "AM", location: "GVSU/DeVos" },
  { division: "17 Premier", start: "AM", location: "DeVos Place" },
  { division: "17 Open", start: "AM", location: "DeVos Place" },
  { division: "18 Club", start: "AM", location: "DeVos Place" },
  { division: "18 Premier", start: "AM", location: "DeVos Place" },
  { division: "18 Open", start: "AM", location: "DeVos Place" },
];

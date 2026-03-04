export type Location = {
  name: string;
  courts: string;
  addressLines: string[];
  seatingAvailable: boolean;
  seatingText: string;
  apparel: boolean;
  concessions: boolean;
};

export const locations: Location[] = [
  {
    name: "DeVos Place",
    courts: "1–36",
    addressLines: ["303 Monroe Ave", "Grand Rapids, MI 49503"],
    seatingAvailable: true,
    seatingText: "Chairs around all courts, NO outside chairs allowed",
    apparel: true,
    concessions: true,
  },
  {
    name: "Grand Valley State University",
    courts: "37–42 (Fieldhouse and Rec Center)",
    addressLines: ["4249 W Ravine Center Dr", "Allendale, MI 49401"],
    seatingAvailable: true,
    seatingText: "Bleachers – outside chairs are allowed as well",
    apparel: true,
    concessions: true,
  },

  {
    name: "Impact Dynamic",
    courts: "43–50",
    addressLines: ["2830 Port Sheldon St", "Hudsonville, MI 49426"],
    seatingAvailable: true,
    seatingText: "Chairs provided – NO outside chairs",
    apparel: true,
    concessions: true,
  },
  {
    name: "Aquinas College",
    courts: "51–56",
    addressLines: ["1580 Fulton St E", "Grand Rapids, MI 49506"],
    seatingAvailable: true,
    seatingText: "Bleachers – NO outside chairs",
    apparel: true,
    concessions: true,
  },
  {
    name: "MSA Sport Spot",
    courts: "57–60",
    addressLines: ["3701 32nd St SE", "Grand Rapids, MI 49512"],
    seatingAvailable: true,
    seatingText: "Bleachers",
    apparel: true,
    concessions: true,
  },
  {
    name: "East Kentwood HS",
    courts: "61–64",
    addressLines: ["6230 Kalamazoo Ave SE", "Kentwood, MI 49508"],
    seatingAvailable: true,
    seatingText: "Bleachers – outside chairs are allowed as well",
    apparel: true,
    concessions: false,
  },
  {
    name: "East Kentwood Freshman Campus",
    courts: "65–66",
    addressLines: ["6170 Valley Ln Dr SE", "Kentwood, MI 49508"],
    seatingAvailable: true,
    seatingText: "Bleachers – outside chairs are allowed as well",
    apparel: false,
    concessions: false,
  },
  {
    name: "Byron Center HS",
    courts: "67–70",
    addressLines: ["8500 Burlingame Ave SW", "Byron Center, MI 49315"],
    seatingAvailable: true,
    seatingText: "Bleachers – NO outside chairs",
    apparel: true,
    concessions: false,
  },
  {
    name: "Special Olympics of Michigan",
    courts: "71-73",
    addressLines: ["160 68th SW", "Grand Rapids, MI 49548"],
    seatingAvailable: true,
    seatingText: "Bleachers",
    apparel: false,
    concessions: true,
  },
  {
    name: "Grandville High School",
    courts: "74–77",
    addressLines: ["4700 Canal Ave SW", "Grandville, MI 49418"],
    seatingAvailable: true,
    seatingText: "Bleachers",
    apparel: false,
    concessions: false,
  },
  {
    name: "Grand Rapids Community College",
    courts: "77–82",
    addressLines: ["143 Bostwick Ave NE", "Grand Rapids, MI 49503"],
    seatingAvailable: true,
    seatingText: "Bleachers",
    apparel: false,
    concessions: false,
  },
];

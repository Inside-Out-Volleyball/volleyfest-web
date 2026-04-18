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
    courts: "37–44 (Fieldhouse and Rec Center)",
    addressLines: ["4249 W Ravine Center Dr", "Allendale, MI 49401"],
    seatingAvailable: true,
    seatingText: "Bleachers – outside chairs are allowed as well",
    apparel: true,
    concessions: true,
  },

  {
    name: "Impact Dynamic",
    courts: "45–52",
    addressLines: ["2830 Port Sheldon St", "Hudsonville, MI 49426"],
    seatingAvailable: true,
    seatingText: "Chairs provided – NO outside chairs",
    apparel: true,
    concessions: true,
  },
  {
    name: "Aquinas College",
    courts: "53–58",
    addressLines: ["1580 Fulton St E", "Grand Rapids, MI 49506"],
    seatingAvailable: true,
    seatingText: "Bleachers - NO outside chairs",
    apparel: true,
    concessions: true,
  },
  {
    name: "MSA Sport Spot",
    courts: "59–62",
    addressLines: ["3701 32nd St SE", "Grand Rapids, MI 49512"],
    seatingAvailable: true,
    seatingText: "Bleachers – outside chairs are allowed",
    apparel: true,
    concessions: true,
  },
  {
    name: "East Kentwood HS",
    courts: "63–66",
    addressLines: ["6230 Kalamazoo Ave SE", "Kentwood, MI 49508"],
    seatingAvailable: true,
    seatingText: "Bleachers – outside chairs are allowed as well",
    apparel: true,
    concessions: false,
  },
  {
    name: "East Kentwood Freshman Campus",
    courts: "67–68",
    addressLines: ["6170 Valley Ln Dr SE", "Kentwood, MI 49508"],
    seatingAvailable: true,
    seatingText: "Bleachers - NO outside chairs",
    apparel: false,
    concessions: false,
  },
  {
    name: "Byron Center HS",
    courts: "69–72",
    addressLines: ["8500 Burlingame Ave SW", "Byron Center, MI 49315"],
    seatingAvailable: true,
    seatingText: "Bleachers – outside chairs are allowed",
    apparel: false,
    concessions: false,
  },
  {
    name: "Special Olympics of Michigan",
    courts: "73-75",
    addressLines: ["160 68th SW", "Grand Rapids, MI 49548"],
    seatingAvailable: true,
    seatingText: "Bleachers - NO outside chairs",
    apparel: false,
    concessions: true,
  },
  {
    name: "Jenison High School",
    courts: "76–79",
    addressLines: ["2140 Bauer Rd", "Jenison, MI 49428"],
    seatingAvailable: true,
    seatingText: "Bleachers",
    apparel: false,
    concessions: false,
  },
  {
    name: "Grand Rapids Community College",
    courts: "80–85",
    addressLines: ["143 Bostwick Ave NE", "Grand Rapids, MI 49503"],
    seatingAvailable: true,
    seatingText: "Bleachers - NO outside chairs",
    apparel: true,
    concessions: true,
  },
  {
    name: "Northview High School",
    courts: "86–89",
    addressLines: ["4451 Hunsberger Ave NE", "Grand Rapids, MI 49525"],
    seatingAvailable: true,
    seatingText: "Bleachers - outside chairs are allowed",
    apparel: true,
    concessions: true,
  },
];

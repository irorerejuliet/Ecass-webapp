type Transaction = {
  date: string;
  type: "donation" | "expense";
  amount: string;
  description: string;
};

export const transactions: Transaction[] = [
  {
    date: "OCT 24, 2023",
    type: "donation",
    amount: "+500,000",
    description: "Community Safety Fund - Zenith Bank Transfer",
  },
  {
    date: "OCT 22, 2023",
    type: "expense",
    amount: "-120,000",
    description: "Fuel Subsidy for Sector 4 Patrol Vehicles",
  },
  {
    date: "OCT 20, 2023",
    type: "expense",
    amount: "-45,000",
    description: "Emergency Radio Repair - Unit 07",
  },
  {
    date: "OCT 18, 2023",
    type: "donation",
    amount: "+1,200,000",
    description: "Corporate CSR - Local Business Association",
  },
  {
    date: "OCT 15, 2023",
    type: "expense",
    amount: "-250,000",
    description: "New Uniform Procurement for Auxiliary Guards",
  },
];

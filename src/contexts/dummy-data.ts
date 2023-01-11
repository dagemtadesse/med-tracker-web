import { Info } from "./InformationContext";
import { User } from "./UserContext";

export const dummyDocuments = [
  {
    id: "12",
    title: "Vaccine",
    description: "I have taken vaccine",
    type: "Travel Document",
  },
  {
    id: "52",
    title: "Will",
    description: "I have taken vaccine",
    type: "Travel Document",
  },

  {
    id: "32",
    title: "Vaccine",
    description: "I have taken vaccine",
    type: "Journal",
  },
  {
    id: "85",
    title: "Vaccine",
    description: "I have taken vaccine",
    type: "Journal",
  },
];

export const dummyInfo: Info[] = [
  {
    title: "Vannmelon",
    type: "allergies",
    id: "001",
  },
  {
    title: "Kammel",
    type: "allergies",
    id: "002",
  },
  {
    title: "Dextrose",
    type: "allergies",
    id: "003",
  },
  {
    title: "Vannmelon",
    type: "medicines",
    id: "001",
  },
  {
    title: "Kammel",
    type: "medicines",
    id: "002",
  },
  {
    title: "Dextrose",
    type: "medicines",
    id: "003",
  },
];

export const user: User = {
  firstName: "Dagem",
  lastName: "Tadesse",
  phoneNumber: "0915260951",
  dateOfBirth: "9-19-2001",
  gender: "Male",
  CPRNumber: "111",
  nationality: "Ethiopian",
  isOrganDonor: true,
  address: {
    zip: "1000",
    city: "Addiss Ababa",
    streetAddress: "Arada street",
    country: "Ethiopia",
  },
  insurance: {
    type: "Health",
    company: "Awash insurance",
    polcyNumber: "1000",
    emergencyNumber: "1000",
  },
  emergencyContactPerson: [
    {
      name: "Tadesse Seyfu",
      phoneNumber: "0912131826",
      relationship: "Father",
    },
  ],
  other: "hola, como estas",
};

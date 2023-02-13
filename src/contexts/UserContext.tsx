import { createContext, ReactNode, useState } from "react";
import { user } from "./dummy-data";

export type User = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  createdAt?: Date;
  gender: string;
  CPRNumber: string;
  nationality: string;
  isOrganDonor: boolean;
  address: {
    zip: string;
    city: string;
    streetAddress: string;
    country: string;
  };
  insurance: {
    type: string;
    company: string;
    polcyNumber?: string;
    emergencyNumber?: string;
  };
  emergencyContactPerson: {
    name: string;
    phoneNumber: string;
    relationship: string;
  }[];
  other: string;
};

type UserContextType = {
  user?: User;
  setUser: (user: User) => void;
};
const UserContext = createContext<UserContextType>({
  setUser: () => {
    /**empty func */
  },
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setUser] = useState<undefined | User>();

  return (
    <UserContext.Provider value={{ user: currentUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

import { createContext, ReactNode, useState, useEffect } from "react";
import { searchItem, updateUserItems } from "../http/repository";
import { dummyInfo } from "./dummy-data";

export type Info = {
  title: string;
  id: string;
  type: "allergies" | "medicines" | "diagnoses" | "vaccines";
};

export type MedicalInformation = {
  informations: Info[];
  removeItem: (item: Info) => Promise<any>;
  searchInformation: (type: string, query: string) => Promise<Info[]>;
  translateInformation: (type: string, langauge: string) => Promise<Info[]>;
  addInformation: (item: Info) => Promise<any>;
  shareInformation: (type: string) => Promise<any>;
  setInfos: React.Dispatch<React.SetStateAction<Info[]>>;
};

// type MedicalInformationMethods

export const InformationContext = createContext<MedicalInformation>({
  informations: [],
  removeItem: async (item) => {
    /** empty func */
  },
  searchInformation: async (type: string, query: string) => {
    /** empty func */
    return [];
  },
  translateInformation: async (type: string, language: string) => {
    /** empty func */
    return [];
  },
  addInformation: async (item) => {
    /** empty func */
  },
  shareInformation: async (type: string) => {
    /** empty func */
  },
  setInfos: () => {
    /** emtpy func */
  },
});

const InformationProvider = ({ children }: { children: ReactNode }) => {
  const [informations, setInformations] = useState<Info[]>([]);

  const addInformation = async (info: Info) => {
    if (!informations.find((information) => information.id == info.id)) {
      setInformations((oldVal) => [...oldVal, info]);
    }
  };

  const searchInformation = async (type: string, query: string) => {
    let searchTerm = query.trim();
    if (!searchTerm.length) {
      return [];
    }

    const data = await searchItem(type);
    // console.log(data);

    return data.filter((info) =>
      info.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const translateInformation = async (
    type: string,
    langauge: string
  ): Promise<Info[]> => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(dummyInfo.filter((info) => info.type === type)),
        500
      );
    });
  };

  const shareInformation = async (type: string) => {
    console.log(`sharing ${type} information`);
  };

  const removeItem = async (item: Info) => {
    setInformations((oldList: Info[]) =>
      oldList.filter((prev) => prev.id !== item.id)
    );
  };

  return (
    <InformationContext.Provider
      value={{
        informations,
        removeItem,
        searchInformation,
        translateInformation,
        shareInformation,
        addInformation,
        setInfos: setInformations,
      }}
    >
      {children}
    </InformationContext.Provider>
  );
};

export default InformationProvider;

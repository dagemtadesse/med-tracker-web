import { createContext, ReactNode, useState } from "react";
import { searchItem } from "../http/repository";
import * as htmlToImage from "html-to-image";

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
  translateInformation: async (
    type: string,
    language: string
  ): Promise<Info[]> => {
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
    console.log(data);

    return data.filter((info) =>
      info.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const translateInformation = async (
    type: string,
    langauge: string
  ): Promise<Info[]> => {
    try {
      const lang = Object.entries(countries).filter(
        ([_, value]) => value == langauge
      );
      const data = informations.filter((info) => info.type == type);

      const url = `https://api.mymemory.translated.net/get?q=${data
        .map((info) => info.title)
        .join(",")}&langpair=en|${lang[0][0]}`;
      // const endpoint = new URL("https://api.mymemory.translated.net/get?");

      // endpoint.searchParams.set("q", data.map((info) => info.title).join(","));
      // endpoint.searchParams.set("langpair=", `en|${langauge}`)
      // console.log(url)

      const response = await fetch(url);
      const json = await response.json();

      const translated = (
        (json?.responseData?.translatedText as string) || ""
      ).split(",");

      if (translated.length == data.length) {
        for (let i = 0; i < translated.length; i++) {
          data[i].title = translated[i];
        }
      }

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const shareInformation = async (type: string) => {
    const data = informations.filter((info) => info.type == type);
    const wrapper = document.createElement("ul");
    wrapper.setAttribute("id", "image");
    wrapper.style.backgroundColor = "#fff";
    wrapper.style.padding = "10px"
    wrapper.style.maxWidth = "300px"

    for (let item of data) {
      let listItem = document.createElement("li");
      listItem.textContent = item.title;
      wrapper.appendChild(listItem);
    }

    document.body.appendChild(wrapper);

    htmlToImage.toPng(wrapper).then((url) => {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = url;
      link.click();
    });
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

export const countries = {
  "am-ET": "Amharic",
  "ar-SA": "Arabic",
  "be-BY": "Bielarus",
  "bem-ZM": "Bemba",
  "bi-VU": "Bislama",
  "bjs-BB": "Bajan",
  "bn-IN": "Bengali",
  "bo-CN": "Tibetan",
  "br-FR": "Breton",
  "bs-BA": "Bosnian",
  "ca-ES": "Catalan",
  "cop-EG": "Coptic",
  "cs-CZ": "Czech",
  "cy-GB": "Welsh",
  "da-DK": "Danish",
  "dz-BT": "Dzongkha",
  "de-DE": "German",
  "dv-MV": "Maldivian",
  "el-GR": "Greek",
  "en-GB": "English",
  "es-ES": "Spanish",
  "et-EE": "Estonian",
  "eu-ES": "Basque",
  "fa-IR": "Persian",
  "fi-FI": "Finnish",
  "fn-FNG": "Fanagalo",
  "fo-FO": "Faroese",
  "fr-FR": "French",
  "gl-ES": "Galician",
  "gu-IN": "Gujarati",
  "ha-NE": "Hausa",
  "he-IL": "Hebrew",
  "hi-IN": "Hindi",
  "hr-HR": "Croatian",
  "hu-HU": "Hungarian",
  "id-ID": "Indonesian",
  "is-IS": "Icelandic",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "kk-KZ": "Kazakh",
  "km-KM": "Khmer",
  "kn-IN": "Kannada",
  "ko-KR": "Korean",
  "ku-TR": "Kurdish",
  "ky-KG": "Kyrgyz",
  "la-VA": "Latin",
  "lo-LA": "Lao",
  "lv-LV": "Latvian",
  "men-SL": "Mende",
  "mg-MG": "Malagasy",
  "mi-NZ": "Maori",
  "ms-MY": "Malay",
  "mt-MT": "Maltese",
  "my-MM": "Burmese",
  "ne-NP": "Nepali",
  "niu-NU": "Niuean",
  "nl-NL": "Dutch",
  "no-NO": "Norwegian",
  "ny-MW": "Nyanja",
  "ur-PK": "Pakistani",
  "pau-PW": "Palauan",
  "pa-IN": "Panjabi",
  "ps-PK": "Pashto",
  "pis-SB": "Pijin",
  "pl-PL": "Polish",
  "pt-PT": "Portuguese",
  "rn-BI": "Kirundi",
  "ro-RO": "Romanian",
  "ru-RU": "Russian",
  "sg-CF": "Sango",
  "si-LK": "Sinhala",
  "sk-SK": "Slovak",
  "sm-WS": "Samoan",
  "sn-ZW": "Shona",
  "so-SO": "Somali",
  "sq-AL": "Albanian",
  "sr-RS": "Serbian",
  "sv-SE": "Swedish",
  "sw-SZ": "Swahili",
  "ta-LK": "Tamil",
  "te-IN": "Telugu",
  "tet-TL": "Tetum",
  "tg-TJ": "Tajik",
  "th-TH": "Thai",
  "ti-TI": "Tigrinya",
  "tk-TM": "Turkmen",
  "tl-PH": "Tagalog",
  "tn-BW": "Tswana",
  "to-TO": "Tongan",
  "tr-TR": "Turkish",
  "uk-UA": "Ukrainian",
  "uz-UZ": "Uzbek",
  "vi-VN": "Vietnamese",
  "wo-SN": "Wolof",
  "xh-ZA": "Xhosa",
  "yi-YD": "Yiddish",
  "zu-ZA": "Zulu",
};

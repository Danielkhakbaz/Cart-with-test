import { ReactNode, useState } from "react";
import LanguageContext from "src/providers/language/language-context";
import EN from "src/providers/language/data/en.json";
import ES from "src/providers/language/data/es.json";
import { Language } from "src/providers/language/type";

type Props = {
  language: Language;
  children: ReactNode;
};

export const LanguageProvider = ({ language, children }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);

  const changeLanguage = (language: Language) => setCurrentLanguage(language);

  const labelsDictionary: { [key: string]: { [key: string]: string } } = {
    EN,
    ES,
  };

  const getLabel = (labelId: string) => {
    const label = labelsDictionary[currentLanguage][labelId];
    if (!label)
      throw new Error(
        `LabelID ${labelId} not found in ${currentLanguage}.json`
      );
    return label;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, getLabel }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

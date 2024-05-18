import { useState } from "react";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { localizationData } from "../LocalizationImportar";
import { i18nMateConfig } from "../../i18nmate.config";

type LanguageCode = string;
type LocalizationData = { [key: string]: string };
type LocalizationFiles = { [key in LanguageCode]?: LocalizationData };

const localizedData: { [key: string]: string } = {};
Object.keys(localizationData).forEach((locale) => {
  const files = localizationData[locale as keyof LocalizationFiles];
  if (files) {
    Object.keys(files).forEach((fileName) => {
      localizedData[`${locale}:${fileName}`] = files[fileName];
    });
  }
});

const useLocalization = (fileName: string) => {
  const [lang, setLang] = useState<string>(i18nMateConfig.fallbackLng);
  const locale =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("localize")) ||
    "en";

  useIsomorphicLayoutEffect(() => {
    const key = `${locale}:${fileName}`;
    if (localizedData[key]) {
      setLang(localizedData[key]);
    } else {
      console.error(
        `Localization lang not found for language: ${locale} and fileName: ${fileName}`
      );
    }
  }, [fileName, locale]);

  function rt(text: string, variables: Record<string, any>): string {
    if (!variables || Object?.keys(variables).length === 0) {
      return text;
    }
    let replacedText: string = text;
    Object?.keys(variables)?.forEach((variable) => {
      const regex = new RegExp(`{{${variable}}}`, "g");
      replacedText = replacedText?.replace(regex, variables[variable]);
    });
    return replacedText;
  }

  return {
    t: lang,
    rt,
  };
};

export default useLocalization;

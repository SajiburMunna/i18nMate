import { i18nMateConfig } from "../../i18nmate.config";
import { handleImportLocalization } from "../../public/handleImportLocalization";

type LanguageCode = string;
type LocalizationData = { [key: string]: string };
type LocalizationFiles = { [key in LanguageCode]?: LocalizationData };

export const localizationData: LocalizationFiles = {};

i18nMateConfig.supportedLngs.forEach((lang) => {
  localizationData[lang] = Object.fromEntries(
    i18nMateConfig.filesName.map((key) => [
      key,
      handleImportLocalization(lang, key),
    ])
  );
});

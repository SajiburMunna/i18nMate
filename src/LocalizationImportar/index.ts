import { i18nMateConfig } from "../../i18nmate.config";

type LanguageCode = string;
type LocalizationData = { [key: string]: string };
type LocalizationFiles = { [key in LanguageCode]?: LocalizationData };

function handleImportLocalization(locale: string, file: string) {
  return require(`../../public/locales/${locale}/${file}.json`);
}

export const localizationData: LocalizationFiles = {};

i18nMateConfig.supportedLngs.forEach((lang) => {
  localizationData[lang] = Object.fromEntries(
    i18nMateConfig.filesName.map((key) => [
      key,
      handleImportLocalization(lang, key),
    ])
  );
});

export function handleImportLocalization(locale: string, file: string) {
  return require(`../../public/locales/${locale}/${file}.json`);
}

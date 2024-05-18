type LanguageCode = string;
type LocalizationData = {
    [key: string]: string;
};
type LocalizationFiles = {
    [key in LanguageCode]?: LocalizationData;
};
export declare const localizationData: LocalizationFiles;
export {};

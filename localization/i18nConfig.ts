type I18nConfig = {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
};

const i18nConfig: I18nConfig = {
  locales: ["en", "ar", "ku"],
  defaultLocale: "ar",
  prefixDefault: true,
};

export default i18nConfig;

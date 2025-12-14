import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { languageOptions } from './i18n';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select
      placeholder="language"
      allowDeselect={false}
      data={Object.values(languageOptions)}
      value={i18n.language}
      onChange={(value) => {
        if (value) {
          changeLanguage(value);
        }
      }}
    />
  );
};

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'sv', 'alien']
export const languageNames = {
  de: '🇩🇪 German',
  en: '🇬🇧 English',
  es: '🇪🇸 Spanish',
  fr: '🇫🇷 French',
  it: '🇮🇹 Italian',
  ja: '🇯🇵 Japanese',
  sv: '🇸🇪 Swedish',
  // alien: '👽 Alien',
}
const LanguageSelector = ({ language, onLanguageChange }) => {
  if (!language || language === '') {
    language = 'en'
  }

  return (
    <div className="my-4 flex justify-center">
      <select
        value={language}
        onChange={onLanguageChange}
        className="block w-1/2 rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 lg:w-48"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} selected={language === lang}>
            {languageNames[lang]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector

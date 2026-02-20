import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Bookmark = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const langMap = {
    en: 'EN',
    uk: 'UA',
  };

  const languageToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    e.stopPropagation();
  };

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out z-[-1] ${
        isOpen ? 'top-full' : '-top-[50px]'
      }`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex flex-col items-center shadow-lg rounded-b-2xl bg-[#665d4b] text-white w-10 ">
        <div className="flex flex-col items-center gap-3 lg:gap-6 mt-8">
          <button
            className="hover:scale-110 transition cursor-pointer text-white bg-[#665d4b]"
            title="theme"
          >
            X
          </button>
          <button
            onClick={(e) => languageToggle(e)}
            className="mt-3 text-md font-bold hover:scale-110 transition cursor-pointer"
            title="language"
          >
            {langMap[i18n.language as 'en' | 'uk']}
          </button>
        </div>
        <button
          onClick={() => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="mt-8 mb-8 text-sm transition-transform duration-700 ease-in-out cursor-pointer hover:rotate-360"
          title="settings"
        >
          Set
        </button>
      </div>
    </div>
  );
};

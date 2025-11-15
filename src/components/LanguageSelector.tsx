'use client';

import { useState, useRef, useEffect } from 'react';
import { Languages, Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { languages, type Language } from '@/lib/i18n';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm hover:bg-accent/10 transition group border border-white/10 hover:border-accent/30"
        aria-label="Change language"
      >
        <Languages size={16} className="text-accent transition text-[#86C520]" />
        <span className="hidden sm:inline text-xs font-semibold text-primary-light/80 group-hover:text-accent transition uppercase">
          {currentLanguage.code}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-52 bg-black/95 backdrop-blur-xl overflow-hidden z-50 border border-white/10 shadow-[0_0_30px_rgba(134,197,32,0.2)]">
            <div className="p-2 bg-accent/20 border-b border-white/10">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider px-2">
                Select Language
              </p>
            </div>

            <div className="p-2 max-h-80 overflow-y-auto">
              {languages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left transition flex items-center gap-3 group ${
                      isSelected
                        ? 'bg-accent/20 text-white border border-accent/30'
                        : 'hover:bg-white/5 text-gray-300 hover:text-white border border-transparent'
                    }`}
                  >
                    <Languages size={16} className={isSelected ? 'text-accent text-[#86C520]' : 'text-gray-500 group-hover:text-accent'} />

                    <div className="flex-1">
                      <span className="font-semibold block text-sm">
                        {lang.name}
                      </span>
                      <span className="text-xs text-gray-500 uppercase">
                        {lang.code}
                      </span>
                    </div>

                    {isSelected && (
                      <Check size={16} className="text-accent" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

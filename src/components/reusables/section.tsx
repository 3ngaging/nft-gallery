'use client';

import { ReactNode } from 'react';

interface ActionButton {
  name: string;
  function: () => void;
  disabled?: boolean;
}

interface SectionProps {
  name: string;
  description: string;
  filepath?: string;
  actions: ActionButton[];
  children?: ReactNode;
}

export default function Section({
  name,
  description,
  filepath,
  actions,
  children,
}: SectionProps) {
  return (
    <div className="border border-white/10 bg-white/5 p-6 rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
        <p className="text-sm text-gray-400 mb-1">{description}</p>
        {filepath && (
          <p className="text-xs text-gray-500 font-mono">📁 {filepath}</p>
        )}
      </div>

      {children && <div className="mb-4">{children}</div>}

      <div className="flex flex-wrap gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.function}
            disabled={action.disabled}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              action.disabled
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-[#F2ECC8] hover:bg-[#aca686] text-black'
            }`}
          >
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
}

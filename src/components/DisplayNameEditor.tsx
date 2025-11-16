'use client';

import { useState, useEffect } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

type DisplayNameEditorProps = {
  privyUserId: string;
  initialDisplayName: string;
  onNameUpdated: (newName: string) => void;
};

export default function DisplayNameEditor({
  privyUserId,
  initialDisplayName,
  onNameUpdated,
}: DisplayNameEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [tempName, setTempName] = useState(initialDisplayName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    setDisplayName(initialDisplayName);
    setTempName(initialDisplayName);
  }, [initialDisplayName]);

  const handleEdit = () => {
    setIsEditing(true);
    setTempName(displayName);
    setError('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempName(displayName);
    setError('');
  };

  const handleSave = async () => {
    const trimmed = tempName.trim();

    if (trimmed.length < 2 || trimmed.length > 30) {
      setError('Name must be 2-30 characters');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch('/api/profile/display-name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          privyUserId,
          displayName: trimmed,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to update name');
        return;
      }

      setDisplayName(data.displayName);
      setIsEditing(false);
      onNameUpdated(data.displayName);
    } catch (err) {
      console.error('Error saving display name:', err);
      setError('Failed to save. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isEditing) {
    return (
      <button
        onClick={handleEdit}
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition text-sm"
        title="Edit display name"
      >
        <Edit2 size={16} />
        <span>Edit Name</span>
      </button>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          className="flex-1 bg-black/30 border border-white/20 text-white px-3 py-2 text-sm focus:outline-none focus:border-accent/50"
          placeholder="Enter your display name"
          maxLength={30}
          disabled={loading}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSave();
            } else if (e.key === 'Escape') {
              handleCancel();
            }
          }}
        />
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-accent hover:bg-accent/90 text-black p-2 transition disabled:opacity-50"
          title={t.common.save}
        >
          <Check size={16} />
        </button>
        <button
          onClick={handleCancel}
          disabled={loading}
          className="bg-red-600/20 hover:bg-red-600/30 text-red-400 p-2 transition disabled:opacity-50"
          title={t.common.cancel}
        >
          <X size={16} />
        </button>
      </div>
      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}
      <p className="text-gray-500 text-xs">
        2-30 characters. Letters, numbers, spaces, _ and - allowed.
      </p>
    </div>
  );
}

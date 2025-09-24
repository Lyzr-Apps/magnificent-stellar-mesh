import React from 'react';
import { Emotion } from '../types';

interface EmotionButtonsProps {
  onEmotionSelect: (emotion: Emotion) => void;
  disabled?: boolean;
}

const emotions: { emoji: string; label: Emotion; description: string }[] = [
  { emoji: '😊', label: 'Happy', description: 'Feeling joyful and upbeat' },
  { emoji: '😢', label: 'Sad', description: 'Feeling down or melancholy' },
  { emoji: '😠', label: 'Angry', description: 'Feeling frustrated or upset' },
  { emoji: '😴', label: 'Tired', description: 'Feeling exhausted or drained' },
  { emoji: '😍', label: 'Love', description: 'Feeling romantic or affectionate' },
];

export const EmotionButtons: React.FC<EmotionButtonsProps> = ({
  onEmotionSelect,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          How are you feeling today?
        </h2>
        <p className="text-lg text-gray-600">
          Choose an emotion and we'll find the perfect recipe for your mood
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-4xl">
        {emotions.map(({ emoji, label, description }) => (
          <button
            key={label}
            onClick={() => onEmotionSelect(label)}
            disabled={disabled}
            className={`
              group relative flex flex-col items-center p-6 rounded-2xl
              transition-all duration-300 transform
              ${disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:scale-105 hover:shadow-xl cursor-pointer'
              }
              bg-white border-2 border-transparent
              hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50
              shadow-lg hover:shadow-blue-200/50
              active:scale-95
            `}
            title={description}
          >
            <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-200">
              {emoji}
            </div>
            <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              {label}
            </span>
            <span className="text-sm text-gray-500 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
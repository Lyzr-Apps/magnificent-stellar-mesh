import React from 'react'
import { Emotion, EmotionConfig } from '../types'

const EMOTIONS: EmotionConfig[] = [
  { emoji: '😊', label: 'Happy', color: '#FFD34E' },
  { emoji: '😢', label: 'Sad', color: '#63D1FF' },
  { emoji: '😡', label: 'Angry', color: '#FF5E5E' },
  { emoji: '😴', label: 'Tired', color: '#BABFC9' },
  { emoji: '🥰', label: 'Love', color: '#6CD36C' },
]

type Props = {
  onSelect: (emotion: Emotion) => void
}

export default function EmotionGrid({ onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-2 py-4 justify-items-center w-full max-w-xl mx-auto">
      {EMOTIONS.map(e => (
        <button
          key={e.label}
          className="bg-white rounded-xl flex flex-col items-center shadow-lg focus:ring-4 transition-all cursor-pointer border border-transparent hover:border-[#4F8CFF] hover:scale-105 px-6 py-4 group"
          style={{ borderColor: e.color }}
          aria-label={e.label}
          onClick={() => onSelect(e.label as Emotion)}
        >
          <span className="text-5xl mb-2" aria-hidden>{e.emoji}</span>
          <span className="text-base font-semibold text-gray-700 group-hover:text-[#4F8CFF]">{e.label}</span>
        </button>
      ))}
    </div>
  )
}

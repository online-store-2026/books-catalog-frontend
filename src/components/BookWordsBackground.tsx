const WORDS = [
  'novel',
  'story',
  'chapter',
  'author',
  'fiction',
  'poetry',
  'prose',
  'narrative',
  'plot',
  'character',
  'theme',
  'genre',
  'bestseller',
  'classic',
  'library',
  'bookmark',
  'manuscript',
  'edition',
  'publish',
  'read',
  'knowledge',
  'wisdom',
  'pages',
  'words',
  'ink',
  'cover',
  'spine',
  'prologue',
  'epilogue',
  'index',
  'glossary',
  'preface',
  'sequel',
  'trilogy',
  'saga',
  'memoir',
  'biography',
  'anthology',
  'mystery',
  'romance',
  'thriller',
  'fantasy',
  'sci-fi',
  'drama',
  'comedy',
];

interface WordItem {
  word: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  rotate: number;
}

const WORD_ITEMS: WordItem[] = Array.from({ length: 40 }, (_, i) => ({
  word: WORDS[i % WORDS.length],
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 14 + 10,
  opacity: Math.random() * 0.12 + 0.06,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * -30,
  rotate: Math.random() * 60 - 30,
}));

export const BookWordsBackground = () => {
  const words = WORD_ITEMS;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {words.map((item, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            transform: `rotate(${item.rotate}deg)`,
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            color: '#8B7355',
            animation: `float-word ${item.duration}s ease-in-out ${item.delay}s infinite alternate`,
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {item.word}
        </span>
      ))}

      <style>{`
        @keyframes float-word {
          0%   { transform: rotate(-15deg) translateY(0px); }
          50%  { transform: rotate(5deg) translateY(-12px); }
          100% { transform: rotate(-15deg) translateY(4px); }
        }
      `}</style>
    </div>
  );
};

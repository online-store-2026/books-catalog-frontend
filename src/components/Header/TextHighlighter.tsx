export const TextHighlighter = ({
  text,
  query,
}: {
  text: string;
  query: string;
}) => {
  if (!query.trim()) return <span>{text}</span>;

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ?
          <mark
            key={i}
            className="bg-blue-100 text-red-400 font-bold rounded-sm"
          >
            {part}
          </mark>
        : <span key={i}>{part}</span>,
      )}
    </span>
  );
};

function MarkedText({ name, filter }: { name: string; filter: string }) {
  const escapedFilter = escapeRegExp(filter);
  const regExp = new RegExp(`(${escapedFilter})`, 'gi');
  const textsList = name.split(regExp);

  return (
    <>
      {textsList.map((character, i) => {
        return character.toLowerCase() === filter.toLowerCase() ? (
          <span key={i} className="font-medium underline text-warning">
            {character}
          </span>
        ) : (
          character
        );
      })}
    </>
  );
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default MarkedText;

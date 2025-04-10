export default async function Cards() {
  const data = await fetch(
    "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e:one&unique=prints"
  );
  const cards = await data.json();
  
  interface Card {
    name: string;
    image_uris: {
      normal: string;
    };
  }

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen p-4 gap-4 ">
      {cards.data.map((card: Card, index: number ) => (
        <img
          key={index}
          src={card.image_uris.normal}
          alt={card.name}
          className="w-[2.5in] h-[3.5in] rounded-lg bg-black"
        />
      ))}
    </div>
  );
}

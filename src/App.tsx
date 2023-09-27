import { useEffect, useState } from "react";

const colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "purple",
  "orange",
  "aqua",
  "violet",
  "pink",
];

function App() {
  const [gameColors, setGameColors] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);

  useEffect(() => {
    setGameColors(colors.concat(colors).sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      {gameColors.map((color, index) => (
        <div className="card" key={index}>
          {!matchedCards.includes(color) ? (
            <div style={{ backgroundColor: color }}>
              {color} {index}
            </div>
          ) : (
            <div>
              {color} {index}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default App;

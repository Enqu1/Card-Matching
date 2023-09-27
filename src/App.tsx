import { useEffect, useState } from "react";
import Cards from "./components/Cards";

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
  "mintcream",
];

function App() {
  const [gameColors, setGameColors] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);

  useEffect(() => {
    setGameColors(colors.concat(colors).sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      <Cards
        gameColors={gameColors}
        matchedCards={matchedCards}
        setMatchedCards={(prop: string[]) => setMatchedCards(prop)}
      ></Cards>
    </>
  );
}

export default App;

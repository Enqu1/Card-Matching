import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

import cheeseburger from "/cheeseburger.png";
import fries from "/fries.png";
import hotdog from "/hotdog.png";
import iceCream from "/ice-cream.png";
import milkshake from "/milkshake.png";
import pizza from "/pizza.png";

const colors = [cheeseburger, fries, hotdog, iceCream, milkshake, pizza];

function App() {
  const [gameColors, setGameColors] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);

  useEffect(() => {
    setGameColors(colors.concat(colors).sort(() => Math.random() - 0.5));
  }, []);

  return (
    <>
      <Header gameColors={gameColors} matchedCards={matchedCards} />
      <Cards
        gameColors={gameColors}
        matchedCards={matchedCards}
        setMatchedCards={(prop: string[]) => setMatchedCards(prop)}
      ></Cards>
    </>
  );
}

export default App;

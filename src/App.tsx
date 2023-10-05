import { useEffect, useState } from "react";
import Cards from "./components/Cards";

import cheeseburger from "./images/cheeseburger.png";
import fries from "./images/fries.png";
import hotdog from "./images/hotdog.png";
import iceCream from "./images/ice-cream.png";
import milkshake from "./images/milkshake.png";
import pizza from "./images/pizza.png";

const colors = [cheeseburger, fries, hotdog, iceCream, milkshake, pizza];

function App() {
  const [gameColors, setGameColors] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);

  useEffect(() => {
    console.log(typeof colors);
    console.table(colors);
    setGameColors(colors.concat(colors).sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div>
      <Cards
        gameColors={gameColors}
        matchedCards={matchedCards}
        setMatchedCards={(prop: string[]) => setMatchedCards(prop)}
      ></Cards>
    </div>
  );
}

export default App;

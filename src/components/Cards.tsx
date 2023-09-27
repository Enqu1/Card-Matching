import { useState } from "react";

interface Props {
  gameColors: string[];
  matchedCards: string[];
  setMatchedCards: (prop: string[]) => void;
}

function Cards({ gameColors, matchedCards, setMatchedCards }: Props) {
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  const [compareCard, setCompareCard] = useState<number>(-1);

  function clickCard(index: number) {
    if (compareCard !== -1) {
      return;
    }

    if (selectedCard === index) return;

    if (selectedCard === -1) {
      setSelectedCard(index);
      return;
    }

    if (gameColors[selectedCard] === gameColors[index]) {
      setMatchedCards(matchedCards.concat(gameColors[index]));

      setSelectedCard(-1);
    } else {
      setCompareCard(index);

      setTimeout(() => {
        setCompareCard(-1);
        setSelectedCard(-1);
      }, 500);
    }
  }

  return (
    <div className="cards">
      {gameColors.map((color, index) => (
        <div className="card" key={index}>
          {matchedCards.includes(color) ||
          selectedCard === index ||
          compareCard === index ? (
            <div
              style={{ backgroundColor: color }}
              className="card-content"
            ></div>
          ) : (
            <div
              className="card-content"
              onClick={() => clickCard(index)}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;

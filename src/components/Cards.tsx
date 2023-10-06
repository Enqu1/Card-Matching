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

    if (gameColors.length === matchedCards.length) {
      console.log("asd");
    }

    if (selectedCard === index) return;

    if (selectedCard === -1) {
      setSelectedCard(index);
      return;
    }

    if (gameColors[selectedCard] === gameColors[index]) {
      const toAdd = [gameColors[selectedCard], gameColors[index]];
      setMatchedCards(matchedCards.concat(toAdd));

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
      {gameColors.map((image, index) => (
        <div
          className={
            "card " +
            ((matchedCards.includes(image) ||
              selectedCard === index ||
              compareCard === index) &&
              "flipped ") +
            (gameColors.length === matchedCards.length && "solved")
          }
          key={index}
        >
          {matchedCards.includes(image) ||
          selectedCard === index ||
          compareCard === index ? (
            <img src={image} alt={image} className="card-content"></img>
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

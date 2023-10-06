import { useEffect, useState } from "react";

interface Props {
  gameColors: string[];
  matchedCards: string[];
}

function Header({ gameColors, matchedCards }: Props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (gameColors.length === matchedCards.length) {
      return;
    }

    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [gameColors, matchedCards, time]);

  const formatSeconds = (s: number) =>
    new Date(s * 1000).toISOString().substr(11, 8);

  return (
    <>
      <h1 className="header">Card Matching</h1>
      <div className="timer">{formatSeconds(time)}</div>
    </>
  );
}

export default Header;

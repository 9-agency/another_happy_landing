import React from "react";

export function shuffleArray<A>(arrayToShuffle: A[]) {
  const array = Array.from(arrayToShuffle);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const withIndexKey = (component: JSX.Element, index: number) => <React.Fragment key={index}>{component}</React.Fragment>

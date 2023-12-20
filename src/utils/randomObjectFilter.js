export const getRandomObjectsFromArray=(objectsArray, n)=> {
    const shuffledArray = [...objectsArray].sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, n);
  }
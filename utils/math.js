
export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getPercentage(value, total) {
  if (total) {
    if (total == 0) {
      return 0;
    } else {
      return (value / total) * 100;
    }
  } else {
    return 0;
  }
}
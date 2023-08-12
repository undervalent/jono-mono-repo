export function getPreviousData(data: any) {
  let position = data.length - 1;
  let lastCompleted = null;

  while (position > 0 || !lastCompleted) {
    const [, returnedData] = data[position];
    if (returnedData) {
      lastCompleted = data[position];
    }
    position = position - 1;
  }
  return lastCompleted[1];
}

const sum = (x: number, y: number): string | number => {
  return (x + y).toString();
};

const value = sum(1, 2);

const log = (message: string): void => {
  console.log(message);
};

log('teste');

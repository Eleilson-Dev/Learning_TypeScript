// Generics
const returnValue = <T>(value: T) => {
  return value;
};

const message = returnValue<string>('str');
const count = returnValue<number>(5);

const getFirstValueFromArray = <Type>(value: Type[]) => {
  return value;
};

const firstValueFromStringArray = getFirstValueFromArray<string>(['1', '2']);
const firstValueFromNumberArray = getFirstValueFromArray<number>([1, 2]);

const returnPromise = async (): Promise<string> => {
  return '5';
};

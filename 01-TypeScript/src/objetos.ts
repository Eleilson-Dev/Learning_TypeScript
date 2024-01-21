// Type
type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
};

const user: User = {
  firstName: 'Elleylson',
  age: 24,
  email: 'Elleylson@gmail.com',
  password: '12345',
};

console.log(user);

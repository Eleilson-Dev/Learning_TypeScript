// Type
type Order = {
  productId: number;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: 'Elleylson',
  age: 24,
  email: 'Elleylson@gmail.com',
  password: '12345',
  orders: [{ productId: 1, price: 15 }],
  register() {
    return '1';
  },
};

// unions
type Author = {
  book: string[];
};

const author: Author & User = {
  firstName: 'Elleylson',
  age: 24,
  email: 'user@gmail.com',
  password: '12345',
  book: [''],
  orders: [],
  register() {
    return 'str';
  },
};

// interface
interface UserInterface {
  readonly firstName: string;
  email: string;
}

interface AuthorInterface {
  books: string[];
}

const userEmail: UserInterface = {
  firstName: 'Elleylson',
  email: 'Elleylson',
};

const newAuthor: AuthorInterface & UserInterface = {
  firstName: 'Elleylson',
  email: 'Elleylson@gmail.com',
  books: ['1'],
};

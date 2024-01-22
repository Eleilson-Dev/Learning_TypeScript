class Person {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

class PersonRefect {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number,
  ) {
    this.name = name;
  }

  callName(): string {
    return this.name;
  }
}

const personRefect = new PersonRefect(15, 'str', 23);
console.log(personRefect.callName());

class Employes extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    return this.name + ' ' + 'teste';
  }
}

const employes = new Employes(12, 'Elleylson', 24);
console.log(employes.whoAmI());

const person = new Person(1, 'Elleylson', 24);
console.log(person.sayMyName());

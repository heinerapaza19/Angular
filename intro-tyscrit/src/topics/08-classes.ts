

export class Person {
    // 1. Explicitly declare the class properties.
    public name: string;
    public lastName: string;
    private address: string;

    constructor(
        // 2. Remove the access modifiers from the constructor parameters.
        name: string,
        lastName: string,
        address: string,
    ) {
        // 3. Assign the parameter values to the class properties.
        this.name = name;
        this.lastName = lastName;
        this.address = address;
    }
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number, 
//         public realName: string,
//     ) {
//         super( realName, 'New York' );
//     }

// }
export class Hero {
    // 1. Declare the properties explicitly on the class.
    public alterEgo: string;
    public age: number; 
    public realName: string;
    public person: Person;

    constructor(
        alterEgo: string,
        age: number, 
        realName: string,
        person: Person,
    ) {
        // 2. Assign the values from the parameters to the properties.
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
        
        // Note: Your original code had a commented-out line:
        // this.person = new Person(realName);
        // If your intention is to create a new Person object inside the Hero constructor,
        // you would use that line instead of accepting a 'person' parameter.
    }
}

const tony = new Person('Tony','Stark','New York');

const ironman = new Hero('Ironman',45,'Tony',tony);


console.log(ironman)
const Pet = require('../src/pet');

describe('constructor', () => {
it('returns an object',() => {        
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
});

it('has an initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
    });

it('has an initial hunger of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
});

it('has an initial fitness of 10', () => {
    const pet = new Pet('Fido');
    expect(pet.fitness).toEqual(10);
});


describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
        });

    it('increments hunger by 5', () => {
        const pet = new Pet('Fido')

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

describe('walk', () => {
    it('increases fitness by 4', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
});
});
    it('increases fitness to 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed()
        expect(pet.hunger).toEqual(0)
    });
    
});

describe('checkUp', () => {
    it('if fitness is below 3, return "I need a walk"', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
       
        expect(pet.checkUp()).toBe("I need a walk")

    });

    it('if pet hunger is 5 or more, return "I am hungry"', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        
        expect(pet.checkUp()).toBe("I am hungry")
    });

    it('if fitness 3 or below and hunger is 5 or more, return "I am hungry and I need a walk"', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.fitness = 3;
        expect(pet.checkUp()).toBe("I am hungry AND I need a walk")
    })
    it('if pet hunger is 4 or below and fitness is 4 or more, return "I feel great!"', () => {
        const pet = new Pet('Fido');
        pet.hunger = 4;
        pet.fitness = 4;
        expect(pet.checkUp()).toBe('I feel great!'); 

})
});

describe('isAlive', () => {
    
    it('if pet fitness is 0 or below, pet hunger is 10 or more and pet age is 30 or more, return false', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0
    pet.hunger = 10
    pet.age = 30

    expect(pet.isAlive()).toEqual(false);
    })

    it('if pet fitness is 1 or above, pet hunger is 9 or less and pet age is 29 or less, return true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 1
        pet.hunger = 9
        pet.age = 29

        expect(pet.isAlive()).toEqual(true);
    })
});

}); 

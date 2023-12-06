const { faker } = require('@faker-js/faker');

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
console.log(createRandomUser());

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
console.log("USERS");
console.log(USERS);
console.log("FAKER.HLEPERS.FAKE()");
console.log(
  faker.helpers.fake(
    'Hello {{person.prefix}} {{person.lastName}}, how are you today?'
  )
);


faker.seed(123);

const firstRandom = faker.number.int();

// Setting the seed again resets the sequence.
faker.seed(123);

const secondRandom = faker.number.int();

console.log(firstRandom === secondRandom);
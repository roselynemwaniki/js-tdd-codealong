// import { currentAgeForBirthYear } from "../utils";

// describe("currentAgeForBirthYear", () => {
//   it("returns the age of a person based on the year of birth", () => {
//     const birthYear = 1984;
//     const ageOfPerson = currentAgeForBirthYear(birthYear);
//     expect(ageOfPerson).toBe(38);
//   });
// });


// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on their year of birth", () => {
    // Arrange
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });
});


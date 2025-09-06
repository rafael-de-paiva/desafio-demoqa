import { faker } from '@faker-js/faker';

export default function generateUserData() {
    const genders = ['1', '2', '3'];
    const dobDate = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
    const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
    const citiesByState = {
        'NCR': ['Delhi', 'Gurgaon', 'Noida'],
        'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
        'Haryana': ['Karnal', 'Panipat'],
        'Rajasthan': ['Jaipur', 'Jaiselmer'],
    };
    const state = faker.helpers.arrayElement(states);
    const departments = ['Insurance','Compliance', 'Legal'];

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        gender: faker.helpers.arrayElement(genders),
        phone: faker.string.numeric(10),
        day: String(dobDate.getDate()).padStart(2, '0'),
        month: dobDate.toLocaleString('en-US',{ month: 'long' }),
        year: dobDate.getFullYear(),
        subject: faker.lorem.word(),
        hobbySports: faker.datatype.boolean(),
        hobbyReading: faker.datatype.boolean(),
        hobbyMusic: faker.datatype.boolean(),
        address: faker.location.streetAddress(),
        state: state,
        city: faker.helpers.arrayElement(citiesByState[state]),
        salary: faker.string.numeric(2)*150,
        department: faker.helpers.arrayElement(departments)
    };
}
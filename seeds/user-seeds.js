const { User } = require('../models');

const userData = [
    {
        username: "felix",
        password: "asdf1234"
    },
    {
        username: "lang",
        password: "asdf1234"
    },
    {
        username: "yuno",
        password: "asdf1234"
    },
    {
        username: "tony",
        password: "asdf1234"
    },
    {
        username: "mickey",
        password: "asdf1234"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
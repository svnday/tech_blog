const { Post } = require('../models');

const postData = [
    {
        title: "Jewelry Store",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod dui, at molestie magna tristique eu.",
        user_id: 1
    },
    {
        title: "Fleeca",
        content: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 2
    },
    {
        title: "Paleto",
        content: "Donec eget mi neque. Donec porta enim vitae dictum efficitur.",
        user_id: 3
    },
    {
        title: "Vault",
        content: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 4
    },
    {
        title: "Casino",
        content: "In mattis sem quis porta tempor. Maecenas pharetra nulla dolor, vitae eleifend odio varius id. Aliquam rhoncus libero sit amet lorem varius, a aliquam felis fermentum. ",
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
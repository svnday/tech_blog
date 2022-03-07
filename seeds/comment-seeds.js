const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod dui, at molestie magna tristique eu.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Donec eget mi neque. Donec porta enim vitae dictum efficitur.",
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: "Donec eget mi neque. Donec porta enim vitae dictum efficitur.",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Phasellus at erat ullamcorper, molestie massa in, scelerisque urna. Phasellus pretium enim sed quam tempus, id venenatis lectus vestibulum.",
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod dui, at molestie magna tristique eu.",
        user_id: 5,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
const User = require('./User');
const Post = require('./Post');

// Create associations
// Since a user can make many posts, it has a one to many relationship with posts.
User.hasMany(Post, {
    // Refer the id column in 'User' model (which is also the primary key) to refer to the 'user_id' column in the 'Post' model.
    foreignKey: 'user_id',
});
// Impose a constraint stating that a post can belong to only one user.
Post.belongsTo(User, {
    // The 'user_id' of 'Post' model will refer or "link" to the primary key of the 'User' model (id column)
    foreignKey: 'user_id',
})

module.exports = { User, Post };
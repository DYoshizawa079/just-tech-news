const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post model
class Post extends Model {}

// Create fields/columns for Post model
Post.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            // Create reference to the 'User' model's 'id' column
            // Note that 'id' column is also a primary key in the 'User' model
            references : {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
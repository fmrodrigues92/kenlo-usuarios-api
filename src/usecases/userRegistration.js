const UserModel = require('../infrastructure/models/UserModel');

class UserService {
    async createUser(userData) {
        try {
            const user = new UserModel(userData);
            await user.save();
            return user;
        } catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }

    async getAllUsers() {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw new Error('Error fetching users: ' + error.message);
        }
    }

    async getUserById(userId) {
        try {
            return await UserModel.findById(userId);
        } catch (error) {
            throw new Error('Error fetching user: ' + error.message);
        }
    }

    async updateUser(userId, updateData) {
        try {
            return await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
        } catch (error) {
            throw new Error('Error updating user: ' + error.message);
        }
    }

    async deleteUser(userId) {
        try {
            return await UserModel.findByIdAndDelete(userId);
        } catch (error) {
            throw new Error('Error deleting user: ' + error.message);
        }
    }
}

module.exports = UserService;
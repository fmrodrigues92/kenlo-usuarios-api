const UserUsecase = require('../usecases/userRegistration');


class UserController {

    async getAllUsers(req, res) {
        const userService = new UserUsecase();
        const users = await userService.getAllUsers();
        res.json(users);
    }

    async createUser(req, res) {

        try {
            const userService = new UserUsecase();
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        const userService = new UserUsecase();
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    }

    async updateUser(req, res) {
        try {
            const userService = new UserUsecase();
            const user = await userService.updateUser(req.params.id, req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        const userService = new UserUsecase();
        await userService.deleteUser(req.params.id);
        res.status(204).end();
    }
}

module.exports = UserController;

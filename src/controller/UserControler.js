const UserSchema = require('../models/User');

module.exports = {
    async createUser(req, res) {
        const user = await UserSchema.create(req.body);
        return res.json(user);
    },
    async findAllUsers(req, res) {
        const users = await UserSchema.find();
        return res.json(users);
    }
}
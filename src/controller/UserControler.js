const UserSchema = require('../models/User');

module.exports = {
    async createUser(req, res) {
        try {
            const user = await UserSchema.create(req.body);
            return res.json(user);
        } catch (error) {
            switch (error.code) {
                case 11000: return res.status(400).json({ error: 'Este usuario já existe.' });
                default: break;
            }
        }
    },
    async findAllUsers(req, res) {
        const users = await UserSchema.find();
        return res.json(users);
    },
    async findUserByID(req, res) {
        const user = await UserSchema.findById(req.params.id);
        return res.json(user);
    }
}
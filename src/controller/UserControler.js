const UserSchema = require('../models/User');
const jwt = require('jsonwebtoken');

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
    },
    async authUser(req, res) {
        const { email, password } = req.body;
        const user = await UserSchema.findOne({ email }).select('+password');
        if (!user) {
            return res.status(400).json({ error: 'Usuario nao encontrado.' });
        }
        if (password != user.password) {
            return res.status(400).json({ error: 'Senhha incorreta' });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET);
        return res.send({auth: 'Autentificado com sucesso', token})
    }
}
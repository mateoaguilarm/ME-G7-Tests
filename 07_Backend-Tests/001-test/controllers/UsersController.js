const UsersModel = require('../models/UsersModel');

const createUser = async (req, res) => {
    // TRABAJO DEL CONTROLADOR
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Ingresar email y password' });
    }

    // INTERACCIÓN CON MODELO
    const user = await UsersModel.createUser(email, password);

    // RESPUESTA A LA VISTA
    return res.status(201).send({ message: 'Usuario creado!', user });
};

const getAllUsers = async (req, res) => {
    const users = await UsersModel.getAllUsers();
    return res.status(200).send({ message: 'Estos son tus usuarios!', users });
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await UsersModel.getUserById(id);

    return res.status(200).send({
        message: `Este es tu usuario con el id: ${id}!`,
        user
    });
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Ingresar email y password' });
    }

    const user = await UsersModel.updateUser(email, password, id);

    return res.status(200).send({
        message: `Actualizado el usuario con el id: ${id}!`,
        user
    });
};

const updatePartialUser = async (req, res) => {
    const { id } = req.params;
    const { property, value } = req.body;

    if (!property || !value) {
        return res.status(400).send({ message: 'Ingresar property y value' });
    }

    const user = await UsersModel.updatePartialUser(property, value, id);

    return res.status(200).send({
        message: `Parcialmente actualizado el usuario con el id: ${id}!`,
        user
    });
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    await UsersModel.deleteUser(id);

    return res.status(204).send();
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    updatePartialUser,
    deleteUser
};
const userModel = require('../model/userModel');
// const bcrypt = require('')

exports.createUser = async (req, res) => {
    console.log('createUser controller');
    const userData = new userModel(req.body);
    console.log('userData = ', userData);
    const { email } = userData;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
        return res.status(400).json({ message: "User already exist" });
    }
    const savedUser = await userData.save();
    res.status(200).json(savedUser);
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length === 0) {
            res.status(400).json({ message: "User not found" });
        }
        res.status(200).json(users);
        // return res.status(200).json('Hello world');
    } catch (err) {
        res.status(500).json({ err: 'Internal server error' });
    }
}

exports.updateUser = async (re, res) => {
    try {
        const id = req.params.id;
        const userExists = await userModel.findOne({ _id: id });
        if (!userExists) {
            res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updatedUser);
    } catch (err) {
        res.status(500).json({ err: 'Internal server error' });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        console.log('deleteUser method');
        const id = req.params.id;
        const userExists = await userModel.findOne({ _id: id });
        if (!userExists) {
            res.status(404).json({ message: "User not found" });
        }
        await userModel.findByIdAndDelete(id);
        res.status(201).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ err: 'Internal server error' });
    }
}

exports.invalid = async (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path',
    });
};
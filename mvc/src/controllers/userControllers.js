const UserModel = require('../models/user');

exports.createUser = async (req, res) => {
	await UserModel.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	return res.status(201).json({ message: 'User Created' });
};

exports.getAllUsers = async (req, res) => {
	const allUsers = await UserModel.find({});

	return res.json(allUsers);
};

exports.getUserById = async (req, res) => {
	const user = await UserModel.findById(req.params.id);

	return res.json(user);
};

exports.updateUser = async (req, res) => {
	const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body);

	return res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
	const deletedUser = await UserModel.findByIdAndDelete(req.params.id);

	return res.json(deletedUser);
};

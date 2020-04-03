'use strict';

const mongoose = require('mongoose');
const { User, UserSession } = require('./../models');

module.exports = (app, serviceName) => {
	// Get user by Token
	app.get(`/${serviceName}/api/token`, (req, res) => {
		const { query } = req;
		const { token } = query;

		UserSession.findById(token, (err, data) => {
			User.findById(data.userId, (err, user) => {
				if (err) {
					console.log(err);

					return res.json({
						success: false
					});
				}

				return res.json({
					success: true,
					data: {
						user
					}
				});
			});
		});
	});

	// Get User-Data by id
	app.get(`/${serviceName}/api/id`, (req, res, next) => {
		const { query } = req;
		const { id } = query;

		User.find(
			{
				_id: new mongoose.Types.ObjectId(id)
			},
			(err, user) => {
				if (err) {
					console.log(err);

					return res.json({
						success: false,
						message: err
					});
				}

				if (user.length === 0) {
					return res.json({
						success: false,
						message: `User with id "${id}" not found`
					});
				}

				return res.json({
					success: true,
					data: {
						user
					}
				});
			}
		);
	});

	/**
 	* @todo Add Update User functionality
 	* @body Currently, this api call is only a placeholder, implement update functionality for user management and profile
	*/
	// Update User
	app.put(`/${serviceName}/api/update`, (req, res, next) => {
		res.status(501); // 501 Status code for "NOT IMPLEMENTED YET"
		return res.json({
			success: false,
			message: 'API Endpoint not implemented yet'
		});
	});

	// Get all Users
	app.get(`/${serviceName}/api/all`, (req, res, next) => {
		User.find({}, (err, users) => {
			if (err) {
				console.log('error:', err);
				return res.json({
					success: false,
					message: err
				});
			}
			return res.json({
				success: true,
				data: {
					users
				}
			});
		});
	});
};

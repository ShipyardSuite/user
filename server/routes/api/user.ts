import express = require('express');

import User, { IUser } from './../../models/User';
import UserSession from './../../models/UserSession';

const serviceName: string = process.env.SERVICE_NAME || 'undefined';

module.exports = (app: express.Application) => {
	/**
 	* @todo Change GetUserByToken service origin
 	* @body Currently auth-service gets the user by token from itself, but since it serves data, it should be called from this service (user) instead.
 	*/

	// Get user by Token
	app.get(`/${serviceName}/api/`, (req, res, next) => {
		const { query } = req;

		UserSession.findById(query.id, (err, data: any) => {
			User.findById(data.userId, (err, user: any) => {
				if (err) {
					console.log(err);

					return res.send({
						success: false
					});
				}

				return res.send({
					success: true,
					data: {
						user
					}
				});
			});
		});
	});

	// Get User-Data by id
	app.get(`/${serviceName}/api/user/:id`, (req, res, next) => {
		User.find(
			{
				_id: req.params.id
			},
			(err, user: any) => {
				if (err) {
					console.log(err);

					return res.send({
						success: false
					});
				}

				return res.send({
					success: true,
					user
				});
			}
		);
	});

	// Update User
	app.put(`/${serviceName}/api/`, (req, res, next) => {
		return res.send({
			success: true
		});
	});

	// Get all Users
	app.get(`/${serviceName}/api/all`, (req, res, next) => {
		User.find({}, (err, users) => {
			if (err) {
				console.log('error:', err);
				return res.send({
					success: false,
					message: err
				});
			}
			return res.send({
				success: true,
				users
			});
		});
	});
};

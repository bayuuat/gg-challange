const express = require('express');
const app = express();

const create = (req, res) => {
	try {
		const { sourceAccount, destinationAccount, amount } = req.body;
		if (!sourceAccount || !destinationAccount || !amount) {
			throw new Error('Insufficient Parameter');
		}
		transfer(sourceAccount, destinationAccount, amount);
		res.status(201).json({ message: 'Transaction created successfully' });
	} catch (e) {
		//For example we'll always use code 500 (Internal Server Error)
		res.status(500).json({ error: e.message });
	}
}

module.exports = {
	create,
};
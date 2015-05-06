module.exports = function(app, db) {
	app.get('/api/data', function(req, res) {

		// use mongoskin to get all datas in the database
		db.collection('campaigns').find().toArray(function(err, result){
			if (err) throw err;
			res.json(result);
		});
	});
}
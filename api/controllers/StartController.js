var  async = require('async');
var cls = require('continuation-local-storage');

module.exports = {
 
	index: function (req, res) {

		  var store = cls.getNamespace('transaction');

		  console.log(req.sessionID, 'get id');
		  
		  setTimeout(function() {
		        console.log(store.get('id'), 'get id from store with timeout'); 
		  }, 5000);

		Test.find({}).exec(function (err, data) {
			console.log(data);
		});

		return res.view();
	},
};

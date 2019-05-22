const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: {
		type: String,
		trim: true
	},
	password: String,
	created: {
		type: Date,
		default: Date.now
	},
	website: {
		type: String,
		get: function (url) {
			if (!url) {
				return url;
			} else {
				if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
					url = 'http://' + url;
				}
				return url
			}	
		},
		set: function (url) {
			if (!url) {
				return url;
			} else {
				if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
					url = 'http://' + url;
				}
				return url;
			}
		}
	}
});

// This will force Mongoose to include getters when converting the 
// MongoDB document to a JSON representation and will allow the 
// output of documents using res.json() in order to include the 
// getter's behavior.
UserSchema.set('toJSON', { getters: true });

mongoose.model('User', UserSchema);
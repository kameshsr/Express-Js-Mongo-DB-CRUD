var mongoose = require('mongoose');
var Schema = mongoose.Schema;

detailSchema = new Schema( {
	unique_id:Number,
	first_name:String,
    last_name: String,
    email: String,
    phone: Number,
    country:String,
    state:String,
	image1:String,
	image2:String,
	image3:String,
	added_date:{
		type: Date,
		default: Date.now
	}

}),
Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;

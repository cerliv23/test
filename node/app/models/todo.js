//var mongoose = require('mongoose');
    // define model =================
    


//var Todo = mongoose.model('Todo', {
//		text : String
//	});


var mongoose = require('mongoose');
module.exports = mongoose.model('Todo', {
text : String,   //askaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskaskask
done : Boolean
});
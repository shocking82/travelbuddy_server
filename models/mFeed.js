const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    id: {type: String},
    date: {type: String, default: Date.now},
    contents: {type: String, default: '내용없음'},
    imageUrl: {type: String}
},
{
    collection: 'feed'
});

//create feed document
feedSchema.statics.create = function(payload){
    const feed = new this(payload);
    return feed.save();
};

//feed document find all
feedSchema.statics.findAll = function(){
    return this.find({});
};

//find one by feed id
feedSchema.statics.findOneById = function(id){
    return this.findOne({id});
};

//update by feed id
feedSchema.statics.updateById = function(id, payload){
    return this.findOneAndUpdate({id}, payload, {new: true});
};

//delete by feed id
feedSchema.statics.deleteById = function(id){
    return this.remove({id});
};

module.exports = mongoose.model('Feed', feedSchema);
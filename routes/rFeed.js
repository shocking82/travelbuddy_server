const router = require('express').Router();
const Feed = require('../models/mFeed')

//create feed document
router.post('/insert', (req, res) => {
    Feed.create(req.body)
        .then(feed => res.send(feed))
        .catch(err => res.status(500).send(err));
});

//feed document find all
router.get('/searchall', (req, res) => {
  Feed.findAll()
      .then((feeds) => {
        if(!feeds.length) return res.status(404).send({err: 'Feed not found'});
        res.send({feeds});
      })
      .catch(err => res.status(500).send(err));
});

//find one by feed id
router.get('/searchone/:feedid', (req, res) => {
    Feed.findOneById(req.params.feedid)
        .then((feed) => {
            if(!feed) return res.status(404).send({err: 'Feed not found'});
            res.send({feed})
        })
        .catch(err => res.status(500).send(err));
});

//update by feed id
router.put('/update/:feedid', (req, res) => {
   Feed.updateById(req.params.feedid, req.body)
       .then(feed => res.send(feed))
       .catch(err => res.status(500).send(err));
});

//delete by feed id
router.delete('/delete/:feedid', (req, res) => {
    Feed.deleteById(req.params.feedid)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
});

module.exports = router;

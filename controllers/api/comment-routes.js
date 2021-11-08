const router = require("express").Router();
const {Comment} = require("../../models");

//get comments
router.get("/", (req, res) => {
    Comment.findAll({})
    .then(result => res.json(result))
    .catch(err => {
        console.log(err);
        res.json(err);
    })
});

//post comment
router.post("/", (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .then(result => res.json(result))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

//delete comment
router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        if(!result){
            res.status(404).json({message: "No commend found with this id"});
            return;
        }
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
})

module.exports = router;
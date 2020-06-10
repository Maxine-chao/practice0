const Post = require('../models/postModel');

exports.getPosts = async(req, res) => {
    let posts;
    try {
        await Post.fethAll().then(([rows]) => {
            console.log(JSON.stringify(rows));
            posts = rows;
        });
        res.render('dashboard', {
            data:posts,
            title: 'blogen Dashboard'
        });
    } catch (error) {
        console.log(err);
    }
};
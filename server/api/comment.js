const db = require('../sql/mysql.class');
const moment = require("moment")

/**
 * 提交评论
 * jtchen 2018/4/12
 */
exports.submitComment = function(req, res){
    let articleId = req.body.articleId || req.query.articleId;
    let content = req.body.content || req.query.content;
    let userName = req.body.userName || req.query.userName;
    let userId = req.body.userId || req.query.userId;
    let time = req.body.time || req.query.time;

    db.insert('comments',{
        'a_id': articleId,
        'comment_content': content,
        'comment_time': time,
        'u_name': userName,
        'u_id': userId
        })
        .then(result => {
            res.json({
                state: true,
                info: '添加评论成功',
            })
        })
        .catch(err => {
            throw err
        })
}


/**
 * 获取评论
 * jtchen 2018/4/12
 */
exports.getComment = function(req, res){
    let articleId = req.body.articleId || req.query.articleId;

    db.find('comments', '*', `a_id = ${articleId}`)
        .then(result => {
            res.json({
                state: true,
                info: '查询成功',
                comments: result
            })
        })
        .catch(err => {
            throw err
        })
}
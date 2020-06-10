const db = require('../utils/database')

const Post =class Post{
    constructor(id, title, date, article){
        this.id =id;
        this.title = title;
        this.date = date;
        this.article = article; 
    }

    static fethAll(){
        return db.execute('SELECT * FROM post');
    };
};

//testing
// const test =async()=>{
//     await Post.fethAll().then(([rows]) => {
//         console.log(JSON.stringify(rows));
//     });
// };

// test()

module.experts = Post
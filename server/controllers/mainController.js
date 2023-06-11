/**
 * Get /
 * Home page
 */

exports.homepage = async (req,res) =>{
    const locals ={
        title: 'Node App',
        description: 'Free Notes App'
    }
        res.render('index',{
            locals,
            layout: '../views/layouts/front-page'
        });

}

/**
 * Get /
 * About Page
 */
exports.about = async (req,res) =>{
    const local = {
        title: 'Node App',
        description: 'Free Notes App'
        
    }

    res.render('about', local)
}
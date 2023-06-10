/**
 * Get /
 * Home page
 */

exports.homepage = async (req,res) =>{
    const locals ={
        title: 'Node App',
        description: 'Free Notes App'
    }
        res.render('index',locals)

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
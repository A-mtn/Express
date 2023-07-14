const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>
{
    // Query requests
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new', (req, res) =>
{
    // Render the new.ejs which can take input
    res.render("users/new")
})

router.post('/', (req, res) =>
{
    const isValid = true
    if ( isValid )
    {
        users.push({ firstName: req.body.firstName })
        res.redirect('/users/'+(users.length - 1))
    }
    else
    {
        res.render("users/new", { firstName: req.body.firstName })
    }
})

// Creating a dynamic route
router
    .route('/:id')
    .get((req, res) => 
    {
        // Can take the user from router.param
        console.log(req.user)
        res.send('Your ID: ' + req.params.id + " Your Name: " + req.user.firstName)
    })
    // Update user with specific id
    .put((req, res) => 
    {
        res.send('Update User with ID: ' + req.params.id)
    })
    // Delete user with specific id
    .delete((req, res) =>
    {
        res.send('Get User with ID: ' + req.params.id)
    })

const users = [{ name: "Mahmut" }, { name: "Eyceykey" }]
// When a parameter with a name id is specified
router.param('id', (req, res, next, id) => 
{
    req.user = users[id]
    next()
})

module.exports = router
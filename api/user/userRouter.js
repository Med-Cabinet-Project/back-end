const router = require('express').Router();

const { Users, Recommendations, Strains } = require('../../data/helpers');

// GET users
router.get('/', (req, res) => {
    Users
        .getAll()
        .then(users => {
            res
                .status(200)
                .json(users);
        })
        .catch(error => {
            res
                .status(500)
                .json(error.message);
        });
});

// PUT Update user by ID
router.put('/:id', (req, res) => {
    Users
        .update(req.params.id, req.body)
        .then(user => {
            if (user) {
                res.status(200).json({ message: 'User has been updated', user });
            } else {
                res.status(404).json({ message: 'The user could not be found', user });
            }
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error updating the user', error
            });
        });
});

// DELETE user by ID
router.delete('/:id', (req, res) => {
    Users
        .remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'The user has been deleted' });
            } else {
                res.status(404).json({ message: 'The user could not be found' });
            }
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error removing the user', error
            });
        });

});

module.exports = router;
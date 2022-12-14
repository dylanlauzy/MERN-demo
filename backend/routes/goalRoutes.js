const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');

// Substitute for these two lines:
// router.get('/', getGoals)
// router.post('/', setGoal)
router.route('/').get(getGoals).post(setGoal)

// Substitute for these two lines:
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router;
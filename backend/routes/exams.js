const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');
const { auth, isTherapist } = require('../middleware/auth');

// Create a New Exam
router.post('/api/exams', auth, isTherapist, async (req, res) => {
  try {
    const exam = new Exam(req.body);
    await exam.save();
    res.status(201).json(exam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve All Exams
router.get('/api/exams', auth, async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve a Specific Exam
router.get('/api/exams/:id', auth, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an Existing Exam
router.put('/api/exams/:id', auth, isTherapist, async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.status(200).json(exam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an Exam
router.delete('/api/exams/:id', auth, isTherapist, async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

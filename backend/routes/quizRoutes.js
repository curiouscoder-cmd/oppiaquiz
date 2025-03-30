const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

// Fetch all quiz questions
router.get("/", async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new quiz question
router.post("/", async (req, res) => {
    const { question, options, correctAnswer } = req.body;

    if (!question || !options || !correctAnswer) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const newQuiz = new Quiz({ question, options, correctAnswer });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

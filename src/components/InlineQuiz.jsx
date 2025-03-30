import { useState } from "react";
import "./InlineQuiz.css";

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
    },
];

const InlineQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const { question, options, correctAnswer } = quizData[currentQuestionIndex];

    const checkAnswer = (option) => {
        setSelectedOption(option);
        if (option === correctAnswer) {
            setFeedback("✅ Correct!");
        } else {
            setFeedback("❌ Incorrect. Try again!");
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setFeedback("");
            setSelectedOption(null);
        } else {
            setFeedback("🎉 You've completed the quiz!");
        }
    };

    return (
        <div className="quiz-container">
            <h3>{question}</h3>
            {options.map((option, index) => (
                <button
                    key={index}
                    className={selectedOption === option ? "selected" : ""}
                    onClick={() => checkAnswer(option)}
                    disabled={selectedOption !== null}
                >
                    {option}
                </button>
            ))}
            <p>{feedback}</p>
            {selectedOption && (
                <button className="next-btn" onClick={nextQuestion}>
                    {currentQuestionIndex < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
                </button>
            )}
        </div>
    );
};

export default InlineQuiz;


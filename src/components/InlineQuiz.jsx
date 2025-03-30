import { useState } from "react";
import "./InlineQuiz.css";

const InlineQuiz = () => {
    const question = "What is the capital of France?";
    const options = ["Berlin", "Madrid", "Paris", "Rome"];
    const correctAnswer = "Paris";
    
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (option) => {
        if (option === correctAnswer) {
            setFeedback("✅ Correct!");
        } else {
            setFeedback("❌ Incorrect. Try again!");
        }
    };

    return (
        <div className="quiz-container">
            <h3>{question}</h3>
            {options.map((option, index) => (
                <button key={index} onClick={() => checkAnswer(option)}>
                    {option}
                </button>
            ))}
            <p>{feedback}</p>
        </div>
    );
};

export default InlineQuiz;

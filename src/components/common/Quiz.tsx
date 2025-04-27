
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, RefreshCcw } from "lucide-react";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  title: string;
  description?: string;
  questions: QuizQuestion[];
  onComplete: (score: number, totalQuestions: number) => void;
}

const Quiz = ({ title, description, questions, onComplete }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answer
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    const score = calculateScore();
    setQuizCompleted(true);
    onComplete(score, questions.length);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const isQuestionAnswered = selectedAnswers[currentQuestion?.id] !== undefined;
  const isAllQuestionsAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);

  if (showResults) {
    const score = calculateScore();
    const scorePercentage = (score / questions.length) * 100;
    
    return (
      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title} - Results</h2>
        
        <div className="mb-8">
          <div className="text-center py-6">
            <div className="mb-4">
              <span className="text-5xl font-bold text-myplate-protein">{score}</span>
              <span className="text-2xl text-gray-500">/{questions.length}</span>
            </div>
            <p className="text-lg">
              {scorePercentage >= 70 
                ? "Great job! You've mastered this content." 
                : "Keep learning! Review the material and try again."}
            </p>
          </div>
          
          <div className="space-y-4 mt-8">
            {questions.map((q, index) => {
              const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
              
              return (
                <div 
                  key={q.id} 
                  className={`p-4 rounded-lg ${
                    isCorrect ? "bg-green-50 border border-green-100" : "bg-red-50 border border-red-100"
                  }`}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{index + 1}. {q.question}</p>
                      <p className="mt-1 text-sm">
                        <span className="font-medium">Your answer: </span> 
                        {selectedAnswers[q.id]}
                      </p>
                      {!isCorrect && (
                        <p className="mt-1 text-sm text-green-600">
                          <span className="font-medium">Correct answer: </span> 
                          {q.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button onClick={resetQuiz} className="flex items-center">
            <RefreshCcw className="mr-2 h-4 w-4" /> Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
      
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm font-medium text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="flex gap-1">
          {questions.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-8 rounded-full ${
                index === currentQuestionIndex
                  ? 'bg-myplate-fruit'
                  : selectedAnswers[questions[index].id] !== undefined
                  ? 'bg-myplate-protein'
                  : 'bg-gray-200'
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion.id] === option;
            
            return (
              <div
                key={index}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  isSelected 
                    ? 'border-myplate-protein bg-myplate-protein bg-opacity-10' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                    isSelected 
                      ? 'border-myplate-protein' 
                      : 'border-gray-300'
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-myplate-protein"></div>}
                  </div>
                  <span>{option}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        
        {currentQuestionIndex === questions.length - 1 ? (
          <Button
            onClick={handleSubmitQuiz}
            disabled={!isAllQuestionsAnswered}
          >
            Submit Quiz
          </Button>
        ) : (
          <Button
            onClick={handleNextQuestion}
            disabled={!isQuestionAnswered}
          >
            Next Question
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

import React from 'react';

export interface Question {
    id: number;
    title: string;
    description: string;
    categories: string;
    complexity: string;
    link: string;
  }

interface QuestionTableProps {
    searchTerm: string;
    category: string;
    complexity: string;
    questions: Question[];
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

const QuestionTable: React.FC<QuestionTableProps> = ({ searchTerm, category, complexity, questions, setQuestions }) => {
  
    const filteredQuestions = questions.filter((question) => {
        const matchesSearchTerm = question.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category ? question.categories.includes(category) : true;
        const matchesComplexity = complexity ? question.complexity === complexity : true;
        return matchesSearchTerm && matchesCategory && matchesComplexity;
    });

    const handleDelete = (id: number) => {
        setQuestions((prevQuestions) => prevQuestions.filter(question => question.id !== id));
    };

    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr>
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Categories</th>
                    <th className="border px-4 py-2">Complexity</th>
                    <th className="border px-4 py-2">Link</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredQuestions.map((question) => (
                    <tr key={question.id}>
                        <td className="border px-4 py-2">{question.id}</td>
                        <td className="border px-4 py-2">{question.title}</td>
                        <td className="border px-4 py-2">{question.description}</td>
                        <td className="border px-4 py-2">{question.categories}</td>
                        <td className="border px-4 py-2">{question.complexity}</td>
                        <td className="border px-4 py-2">
                            <a href={question.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                View
                            </a>
                        </td>
                        <td className="border px-4 py-2">
                            <button onClick={() => handleDelete(question.id)} className="bg-red-500 text-white rounded px-2 py-1">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {filteredQuestions.length === 0 && (
                    <tr>
                        <td colSpan={7} className="border border-gray-300 px-4 py-2 text-center">
                            No questions found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default QuestionTable;

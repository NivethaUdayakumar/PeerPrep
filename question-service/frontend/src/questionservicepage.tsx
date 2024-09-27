import React, { useState } from 'react';
import QuestionTable from './components/questiontable';
import FilterCategories from './components/filtercategory';
import FilterComplexity from './components/filtercomplexity';
import SearchBar from './components/searchbar';
import UploadFile from './components/uploadquestion';
import { Question } from './components/questiontable';

const QuestionServicePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [complexityFilter, setComplexityFilter] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <div className="p-4">
      <div className="flex justify-start items-center space-x-2 mb-4 text-sm">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterCategories category={categoryFilter} setCategory={setCategoryFilter} questions={questions} />
        <FilterComplexity complexity={complexityFilter} setComplexity={setComplexityFilter} questions={questions} />
        <UploadFile setQuestions={setQuestions} />
      </div>
      <QuestionTable
        searchTerm={searchTerm}
        category={categoryFilter}
        complexity={complexityFilter}
        questions={questions}
        setQuestions={setQuestions}
      />
    </div>
  );
};

export default QuestionServicePage;

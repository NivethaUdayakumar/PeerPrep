import React from 'react';
import { Question } from './questiontable';

interface UploadFileProps {
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

const UploadFile: React.FC<UploadFileProps> = ({ setQuestions }) => {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          try {
            const jsonQuestions: Question[] = JSON.parse(content);
            setQuestions((prevQuestions) => [...prevQuestions, ...jsonQuestions]);
          } catch (error) {
            alert('Error parsing JSON: ' + error);
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        accept=".json"
        onChange={handleUpload}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      <img
        src="upload-icon.png"
        alt="Upload"
        className="w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default UploadFile;

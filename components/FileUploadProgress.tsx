
import React, { useState, useEffect } from 'react';
import { Upload, X, CheckCircle2 } from 'lucide-react';

interface FileUploadProgressProps {
  onComplete: () => void;
}

const FileUploadProgress: React.FC<FileUploadProgressProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isUploading && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.floor(Math.random() * 10) + 5;
          return next > 100 ? 100 : next;
        });
      }, 300);
    } else if (progress === 100) {
      setTimeout(() => {
        onComplete();
        setIsUploading(false);
        setProgress(0);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isUploading, progress, onComplete]);

  const handleStart = () => {
    setIsUploading(true);
    setProgress(0);
  };

  return (
    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-white">
      {!isUploading && progress === 0 ? (
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <Upload className="text-blue-600" size={32} />
          </div>
          <p className="text-slate-600 mb-4">Upload lab images or videos</p>
          <button 
            onClick={handleStart}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Select Files
          </button>
        </div>
      ) : (
        <div className="w-full max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">
              {progress < 100 ? 'Uploading media...' : 'Upload complete!'}
            </span>
            <span className="text-sm font-bold text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 mb-4 overflow-hidden">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {progress === 100 && (
            <div className="flex items-center justify-center text-green-600 text-sm font-medium">
              <CheckCircle2 size={16} className="mr-2" />
              Files processed successfully
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploadProgress;

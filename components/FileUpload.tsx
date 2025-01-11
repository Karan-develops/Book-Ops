import React from 'react'

interface Props {
    type: "image" | "video";
    accept: string;
    placeholder: string;
    folder: string;
    variant: "dark" | "light";
    onFileChange: (filePath: string) => void;
    value?: string;
  }
  

const FileUpload = ({
    type,
    accept,
    placeholder,
    folder,
    variant,
    onFileChange,
    value,
  }:Props) => {
  return (
    <div>
      
    </div>
  )
}

export default FileUpload

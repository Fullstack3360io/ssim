'use client';

import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';

const upload = () => {
    const [file1, setFile1] = useState<File | null>(null);
    const [file2, setFile2] = useState<File | null>(null)

  interface UploadEvent {
    files: File[];
  }
  
  const onUpload1 = (event: UploadEvent) => {
    setFile1(event.files[0]);
  };
  
  const onUpload2 = (event: UploadEvent) => {
    setFile2(event.files[0]);
  };

  return (
    <div className="grid">
      <div className="col-6">
        <h5>Drag and Drop 1</h5>
        <FileUpload
          name="file1"
          url="./upload"
          onUpload={onUpload1}
          accept=".jpg, .jpeg, .png"
          maxFileSize={1000000}
          emptyTemplate={<p>Drag and drop o seleccione un archivo</p>}
        />
        {file1 && <p>Archivo seleccionado: {file1.name}</p>}
      </div>
      <div className="col-6">
        <h5>Drag and Drop 2</h5>
        <FileUpload
          name="file2"
          url="./upload"
          onUpload={onUpload2}
          accept=".jpg, .jpeg, .png"
          maxFileSize={1000000}
          emptyTemplate={<p>Drag and drop o seleccione un archivo</p>}
        />
        {file2 && <p>Archivo seleccionado: {file2.name}</p>}
      </div>
    </div>
  );
};

export default upload;
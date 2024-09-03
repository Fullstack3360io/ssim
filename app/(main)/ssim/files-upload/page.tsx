'use client';

import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';

const upload = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fileInteral, setFileInternal] = useState<File | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fileExternal, setFileExternal] = useState<File | null>(null);

  interface UploadEvent {
    files: File[];
  }

  const onUpload1 = (event: UploadEvent) => {
    setFileInternal(event?.files[0]);
  };

  const onUpload2 = (event: UploadEvent) => {
    setFileExternal(event?.files[0]);
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
        {fileInteral && <p>Archivo seleccionado: {fileInteral.name}</p>}
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
        {fileExternal && <p>Archivo seleccionado: {fileExternal.name}</p>}
      </div>
    </div>
  );
};

export default upload;

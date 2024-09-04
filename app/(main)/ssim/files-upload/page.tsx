'use client';
import React, { useRef, useState } from 'react';
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadSelectEvent, ItemTemplateOptions } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { Calendar } from 'primereact/calendar';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Toast } from 'primereact/toast';

const tomorrow = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    today.setHours(0, 0, 0, 0);

    return today;
};

const threeMonths = () => {
    const today = new Date();
    today.setMonth(today.getMonth() + 3);

    return today;
};


const filesUpload = () => {
    const [totalSize, setTotalSize] = useState(0);
    const filesUploadRef = useRef<FileUpload>(null);
    const [datetime, setDateTime] = useState<Date>(tomorrow());
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const toast = useRef(null);

    const onTemplateSelect = (e: FileUploadSelectEvent) => {
        let _totalSize = totalSize;
        let files = e.files;

        for (let i = 0; i < files.length; i++) {
            _totalSize += files[i].size || 0;
        }

        setFiles(getFiles());
        setTotalSize(_totalSize);
    };

    const onTemplateRemove = (file: File, callback: Function) => {
        setTotalSize(totalSize - file.size);
        setFiles(getFiles());
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
        setFiles(getFiles());
    };

    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, cancelButton } = options;
        const value = totalSize / 1000000000;
        const formatedValue = filesUploadRef && filesUploadRef.current ? filesUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1000 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
        const file = inFile as File;
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <i className="pi pi-file" style={{ fontSize: '4em', borderRadius: '50%' }}></i>
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-file mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };

    const getFiles = () => filesUploadRef.current?.getFiles();

    const onSubmit = () => {
        let _totalSize = 0;
        setLoading(true);

        try {
            console.log(datetime);

            files.forEach((file) => {
                console.log(file);
            });
            // setTotalSize(_totalSize);
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Successfully uploaded files!', life: 30000 });
        } catch (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: error?.message, life: 3000 });
        } finally {
            //  setLoading(false);
        }
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div>
            <Toast ref={toast} />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="mb-2">
                <BreadCrumb model={[{ label: 'Files Upload' }]} home={{ icon: 'pi pi-home', url: '/' }} />
            </div>

            <div className="card">
                <div className="card-header">
                    <h5>Files Upload</h5>
                    <label htmlFor="calendar-12h" className="font-bold block mb-2">
                        Date to be Executed
                    </label>
                    <Calendar id="calendar-12h" value={datetime} onChange={(e) => setDateTime(e.value)} showTime hourFormat="12" showIcon minDate={new Date()} maxDate={threeMonths()} />
                </div>

                <div className="card-body">
                    <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                    <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
                    <br />
                    <FileUpload
                        ref={filesUploadRef}
                        name="files[]"
                        multiple
                        accept=".oag"
                        maxFileSize={1000000000}
                        onSelect={onTemplateSelect}
                        onError={onTemplateClear}
                        onClear={onTemplateClear}
                        headerTemplate={headerTemplate}
                        itemTemplate={itemTemplate}
                        emptyTemplate={emptyTemplate}
                        chooseOptions={chooseOptions}
                        cancelOptions={cancelOptions}
                    />
                    <br />
                    <Button label="Upload" disabled={files.length === 0} onClick={onSubmit} icon="pi pi-cloud-upload" className="p-button-primary" style={{ marginTop: 50, display: 'block', margin: '0 auto' }} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default filesUpload;

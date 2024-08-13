// ImageUpload.jsx
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({ onImageChange, ...props }) => {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        },
    });

    // Notify parent component about the image change
    useEffect(() => {
        if (onImageChange) {
            onImageChange(image);
        }
    }, [image, onImageChange]);

    return (
        <div className="grid grid-cols-3 gap-6">
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()}  {...props}/>
                <p>Drag && drop some files here, or click to select files</p>
            </div>
            {previewUrl && (
                <div className="image-preview">
                    <img src={previewUrl} alt="Preview" />
                </div>
            )}
            {image && (
                <div className="image-info">
                    <p>Filename: {image.name}</p>
                    <p>Filetype: {image.type}</p>
                    <p>Filesize: {image.size} bytes</p>
                </div>
            )}
            <style jsx>{`
                .dropzone {
                    border: 2px dashed #cccccc;
                    border-radius: 4px;
                    padding: 20px;
                    text-align: center;
                    cursor: pointer;
                }
                .image-preview img {
                    max-width: 100%;
                    height: auto;
                }
            `}</style>
        </div>
    );
};

export default ImageUpload;

import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Edit.css";

function EditSection({ metaData, onMetadataChange }) {
    const [editedMetaData, setEditedMetaData] = useState(metaData || {});
    const [previewUrl, setPreviewUrl] = useState(""); 

    useEffect(() => {
        setEditedMetaData(metaData || {});
        setPreviewUrl(metaData?.["og:image"] || "");
    }, [metaData]);

    const handleInputChange = (field, value) => {
        const updatedData = {
            ...editedMetaData,
            [field]: value,
        };
        setEditedMetaData(updatedData);
        if (onMetadataChange) {
            onMetadataChange(updatedData);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                handleInputChange("og:image", event.target.result);
                setPreviewUrl(event.target.result); 
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box className="edit-container">
            <Typography variant="h4" className="edit-header">
                Edit Meta Tags
            </Typography>
            <Typography variant="body1" className="edit-title">
                Customize how your content appears on search engines and
                social platforms.
            </Typography>
            <Box component="form">
                <Box>
                    <Typography variant="body1">Title</Typography>
                    <TextField
                        variant="outlined"
                        type="text"
                        value={editedMetaData["og:title"] || ""}
                        onChange={(e) => handleInputChange("og:title", e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </Box>
                <Box>
                    <Typography variant="body1">Description</Typography>
                    <TextField
                        variant="outlined"
                        type="text"
                        value={editedMetaData["description"] || ""}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </Box>
                <Box>
                    <Typography variant="body1">Image</Typography>
                    <TextField
                        variant="outlined"
                        type="file"
                        fullWidth
                        onChange={handleFileChange}
                        margin="normal"
                    />
                    {previewUrl && (
                        <Box
                            component="div"
                            className="edit-image"
                        >
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="meta-img"
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default EditSection;

import React from "react";
import { Typography, Box } from "@mui/material";
import "./Preview.css";
const PreviewSection = ({ metaData }) => {
    return (
        <Box className="preview-container">
            <Typography variant="h5" color="text.primary" gutterBottom>
                Preview
            </Typography>

            <Box className="platform-preview">
                <Typography variant="h6" color="text.primary">
                    Facebook Preview
                </Typography>
                <Typography color="text.secondary">
                    <strong>Title:</strong> {metaData["og:title"]}
                </Typography>
                <Typography color="text.secondary">
                    <strong>Description:</strong> {metaData["description"]}
                </Typography>
                {metaData["og:image"] && (
                    <img
                        src={metaData["og:image"]}
                        alt="Facebook Preview"
                        className="meta-image"
                    />
                )}
            </Box>

            <Box className="platform-preview">
                <Typography variant="h6" color="text.primary">
                    Twitter Preview
                </Typography>
                <Typography color="text.secondary">
                    <strong>Title:</strong> {metaData["og:title"]}
                </Typography>
                <Typography color="text.secondary">
                    <strong>Description:</strong>{" "}
                    {metaData["description"]}
                </Typography>
                {metaData["twitter:image"] && (
                    <img
                        src={metaData["twitter:image"]}
                        alt="Twitter Preview"
                        className="meta-image"
                    />
                )}
            </Box>

            <Box className="platform-preview">
                <Typography variant="h6" color="text.primary">
                    Discord Preview
                </Typography>
                <Typography color="text.secondary">
                    <strong>Title:</strong> {metaData["og:title"]}
                </Typography>
                <Typography color="text.secondary">
                    <strong>Description:</strong> {metaData["description"]}
                </Typography>
                {metaData["og:image"] && (
                    <img
                        src={metaData["og:image"]}
                        alt="Discord Preview"
                        className="meta-image"
                    />
                )}
            </Box>

            <Box className="platform-preview">
                <Typography variant="h6" color="text.primary">
                    LinkedIn Preview
                </Typography>
                <Typography color="text.secondary">
                    <strong>Title:</strong> {metaData["og:title"]}
                </Typography>
                <Typography color="text.secondary">
                    <strong>Description:</strong> {metaData["description"]}
                </Typography>

                {metaData["og:image"] && (
                    <img
                        src={metaData["og:image"]}
                        alt="LinkedIn Preview"
                        className="meta-image"
                    />
                )}
            </Box>
        </Box>
    );
};

export default PreviewSection;

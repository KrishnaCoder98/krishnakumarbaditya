import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./Search.css";
import EditSection from "../EditSection/EditSection";
import CopySection from "../CopySection/CopySection";
import PreviewSection from "../PreviewSection/PreviewSection";

function Search() {
    const [url, setUrl] = useState("");
    const [metadata, setMetadata] = useState(null);

    const fetchMetaTags = async () => {
        const response = await axios.get(
            `http://localhost:5000/scrape?url=${encodeURIComponent(url)}`
        );
        return response.data;
    };

    const { isLoading, isError, refetch, data } = useQuery({
        queryKey: ["metatags", url],
        queryFn: fetchMetaTags,
        enabled: false,
        onSuccess: (fetchedData) => {
            console.log("fetchedData",fetchedData);
            
            setMetadata(fetchedData);
        },
    });
    
    
    const handleFetch = () => {
        if (url) {
            setMetadata(data);
            refetch();
        }
        console.log("metadata",metadata);
    };

    const handleMetadataChange = (updatedMetadata) => {
        setMetadata(updatedMetadata);
    };
    useEffect(()=>{
        setMetadata(data);
    },[])

    return (
        <>
            <Box component="div" className="search-container">
                <Typography variant="h4">
                    Preview and Generate Meta Tags
                </Typography>
                <Box className="search-box">
                    <TextField
                        label="Search"
                        variant="outlined"
                        className="search-input"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        helperText="Make sure to enter a valid URL"
                    />
                    <Button variant="contained" onClick={handleFetch}>
                        Check Website
                    </Button>
                </Box>
            </Box>
            <div style={{ marginTop: "20px" }}>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error fetching meta tags.</p>}
                {metadata && (
                    <>
                        <Box className="metadata-details">
                            <Box className="edit-section">
                                <EditSection
                                    metaData={metadata}
                                    onMetadataChange={handleMetadataChange}
                                />
                            </Box>
                            <Box className="copy-section">
                                <CopySection metaData={metadata} />
                            </Box>
                            <Box className="preview-section">
                                <PreviewSection metaData={metadata} />
                            </Box>
                        </Box>
                    </>
                )}
            </div>
        </>
    );
}

export default Search;

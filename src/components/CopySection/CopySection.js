import React from "react";
import { Typography, Box, Button } from "@mui/material";
import "./Copy.css"
const CopySection = ({ metaData }) => {
    const copyToClipboard = () => {
        const metaTags = `
      <meta property="og:title" content="${metaData["og:title"]}" />
      <meta property="description" content="${metaData["description"]}" />
      <meta property="og:image" content="${metaData["og:image"]}" />
      <meta name="twitter:title" content="${metaData["twitter:title"]}" />
      <meta name="twitter:description" content="${metaData["twitter:description"]}" />
      <meta name="twitter:image" content="${metaData["twitter:image"]}" />
    `;
        navigator.clipboard.writeText(metaTags).then(() => {
            alert("Meta tags copied to clipboard!");
        });
    };

    return (
        <Box
            className = "copy-container"
        >
            <Typography variant="h4" 
            className="copy-header"
            >
                Copy Meta Tags
            </Typography>
            <Typography variant="body1" className="copy-title">
                Copy the HTML meta tags for your site. Insert these tags in your
                site's head section for improved social sharing and SEO.
            </Typography>
            <Typography
                variant="body2"
                component="pre"
                className="meta-body"
            >
                {`<meta property="og:title" content="${metaData["og:title"]}" />\n`}
                {`<meta property="description" content="${metaData["description"]}" />\n`}
                {`<meta property="og:image" content="${metaData["og:image"]}" />\n`}
                {`<meta name="twitter:title" content="${metaData["twitter:title"]}" />\n`}
                {`<meta name="twitter:description" content="${metaData["twitter:description"]}" />\n`}
                {`<meta name="twitter:image" content="${metaData["twitter:image"]}" />`}
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={copyToClipboard}
                sx={{
                    bgcolor: "secondary.main",
                    "&:hover": { bgcolor: "secondary.dark" },
                    mb: 2,
                }}
            >
                Copy Meta Tags
            </Button>
            
        </Box>
    );
};

export default CopySection;

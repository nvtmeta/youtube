import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import fetchResult from "../utils/searchResult";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import data from "../utils/searchResult";
import { ImportSearchTerm } from "../utils/ImportSearchTerm";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);
  console.log(videos);
  useEffect(() => {
    let rawData = data[0];
    setVideos(rawData?.contents);
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "white", mb: "2" }}
      >
        Search results for{" "}
        <span style={{ color: "#f31503" }}>{searchTerm} videos</span>
      </Typography>
      <Videos videos={videos}></Videos>
      <ImportSearchTerm searchTerm={searchTerm} />
    </Box>
  );
};

export default SearchFeed;

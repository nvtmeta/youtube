import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import CheckCircle from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          width: { xs: "356px", md: "320px" },
          height: "326px",
          margin: "auto",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center ",
              textAlign: "center",
              color: "#fff",
              marginTop: marginTop,
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
            />

            <Typography variant="h6">
              {channelDetail?.snippet?.title}{" "}
              <CheckCircle
                sx={{ fontSize: 14, color: "#ccc", marginTop: "20px" }}
              />{" "}
            </Typography>
            <Typography>
              {" "}
              {channelDetail?.statistics?.subscriberCount &&
                parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          </CardContent>
        </Link>
      </Box>
    </>
  );
};

export default ChannelCard;

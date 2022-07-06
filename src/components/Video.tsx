import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { VideoResult } from "../interface/shared";
import { playVideo } from "./Shared";

const VideoBox = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background-color: black;
  z-index: 10;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

const VideoOverlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: ${(props) => props.theme.gap.medium};
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const VideoPlay = styled.iframe`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoVar: Variants = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};

interface VideoProps {
  id?: string;
  results?: VideoResult;
}

const VideoComponent: React.FC<VideoProps> = ({ id, results }) => {
  return (
    <VideoOverlay
      layoutId={id}
      variants={VideoVar}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <VideoBox>
        {results && results.key ? (
          <VideoPlay
            width="100%"
            height="100%"
            src={playVideo(results.key)}
            title={results.name}
          ></VideoPlay>
        ) : (
          <span>sorry... there is not video</span>
        )}
      </VideoBox>
    </VideoOverlay>
  );
};

export default VideoComponent;

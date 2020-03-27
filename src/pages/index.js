import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

import backgroundImg from "../images/momento-group.jpeg"
import pushupVideo from "../images/irene-pushups.mp4"
import { getTimeLeft, opened } from "../lib/momento";


const Self = styled.section`
font-family: 'Georgia','Apple SD Gothic Neo, Malgun Gothic, Nanum Gothic, sans-serif, serif, Arial','Apple SD Gothic Neo', 'Malgun Gothic','Nanum Gothic', 'Noto Sans','sans-serif' !important;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${backgroundImg});
  background-size: contain;
  z-index: 100;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

const Pushups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  z-index: 1030;
`;

const PushupsVideo = styled.video`
  width: 100%;
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 1030;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px 0;
`;

const Timer = styled.h1`
  color: #385e81;
  white-space: pre-wrap;
`;

const IndexPage = () => {
  const [open, setOpen] = useState(null)
  const timer = useRef(null);
  useEffect(() => {
    timer.current = window.setInterval(() => {
      if (opened()) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, 100)

  }, [])

  return (
    <Self>
      <Background />

      {!open && (
        <Pushups>
          <PushupsVideo src={pushupVideo} loop autoPlay muted />
        </Pushups>
      )}

      <Footer>
        <Timer>
          {getTimeLeft(new Date())}
        </Timer>
      </Footer>
    </Self>
  )
}

export default IndexPage
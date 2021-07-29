import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Details() {
  const [Movie, setMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    //grab the movie with specific id
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the data
          setMovie(doc.data());
        } else {
          //redirect to home page
        }
      });
  }, []);
  return (
    <Container>
      {Movie && (
        <>
          <Background>
            <img src={Movie.backgroundImg} />
          </Background>
          <Imagetitle>
            <img src={Movie.titleImg} />
          </Imagetitle>
          <Controls>
            <Playbutton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </Playbutton>
            <Trailerbutton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </Trailerbutton>
            <Addbutton>
              <span>+</span>
            </Addbutton>
            <Groupwatchbutton>
              <img src="/images/group-icon.png" alt="" srcset="" />
            </Groupwatchbutton>
          </Controls>
          <Subtitle>{Movie.subTitle}</Subtitle>
          <Description>{Movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Details;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Imagetitle = styled.div`
  min-height: 170px;
  min-width: 200px;
  height: 30vh;
  width: 35vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Playbutton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  background: rgb(249, 249, 249);
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const Trailerbutton = styled(Playbutton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  text-transform: uppercase;
  color: white;

  &:hover {
    color: black;
  }
`;

const Addbutton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }
`;

const Groupwatchbutton = styled(Addbutton)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgba(249, 249, 249, 0.8);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled(Subtitle)`
  line-height: 1.4;
  margin-top: 10px;
  font-size: 15px;
  max-width: 500px;
`;

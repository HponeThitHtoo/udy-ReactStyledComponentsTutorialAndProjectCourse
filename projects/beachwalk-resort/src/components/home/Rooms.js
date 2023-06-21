import React, { Component } from "react";
import styled from "styled-components";

import Room from "./Room";
import Title from "../globals/Title";
import Section from "../globals/Section";
import rooms from "./rooms-data";
import { setColor, media, setRem } from "../../styles";

export default class Rooms extends Component {
  state = {
    rooms: rooms,
  };

  render() {
    return (
      <Section color={setColor.lightGrey}>
        <Title title="our rooms" center></Title>
        <RoomCenter>
          {this.state.rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </RoomCenter>
      </Section>
    );
  }
}

const RoomCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.large`
    width: 100vw;
    max-width: 1170px;
  `};
  /* ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
  `};
  ${media.large`
    grid-template-columns: repeat(3, 1fr);
  `}; */
  /* 1170 - 90 = 1080 */
  /* 1080 / 360 = 3 */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
`;

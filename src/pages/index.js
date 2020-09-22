import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hello = styled.div`
  font-size: 3rem;
`;

export default function Home() {
  return (
    <Container>
      <title>Hi</title>
      <Hello>Hi</Hello>
    </Container>
  );
};

import styled from "@emotion/styled";

const Container = styled("div")(`
    width: 100%;
    height: 56px;
    margin-top: 12px;
    background: #fff;
`);

const PortText = styled("p")(`
    color: #B7BAC1;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin: 0;
`);

const ConteinerPortText = styled("div")(`
    display: flex;
    justify-content: space-between;
    text-align: start;
`);

const ContainerLine = styled("div")(`
    display: flex;
    width: 95%;
    margin: 5px;
    align-items: center;
`);

const Circle = styled("div")(`
    background: #B7BAC1;
    border-radius: 5px;
    width: 8px;
    height: 8px;
`);
const Line = styled("div")(`
    height: 1px;
    background: #B7BAC1;
    width: 95%;
`);

const Text = styled("p")(`
    color: #B7BAC1;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
`);

export const Road = () => {
  return (
    <Container>
      <ConteinerPortText>
        <PortText>SVO</PortText>
        <PortText>ROV</PortText>
      </ConteinerPortText>
      <ContainerLine>
        <Circle />
        <Line />
        <Circle />
      </ContainerLine>
      <Text>В пути 1 ч 55 мин</Text>
    </Container>
  );
};

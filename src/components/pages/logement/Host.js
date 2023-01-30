import styled from "styled-components";

export default function Host({ title, location }) {
  return (
    <HostStyled>
      <h2>{title}</h2>
      <span>{location}</span>
    </HostStyled>
  );
}
const HostStyled = styled.div`
  width: 100%;
  color: #ff6060;
  letter-spacing: 1px;
  line-height: 140%;
  margin-bottom: 10px;
  h2 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 5px;
  }
  span {
    font-size: 14px;
  }
`;

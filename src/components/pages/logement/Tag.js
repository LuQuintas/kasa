import styled from "styled-components";

export default function Tag({ name }) {
  return <TagStyled>{name}</TagStyled>;
}
const TagStyled = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  border-radius: 5px;
  min-height: 20px;
  min-width: 90px;
  letter-spacing: 0.5px;
  background-color: #ff6060;
  color: white;
  font-size: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

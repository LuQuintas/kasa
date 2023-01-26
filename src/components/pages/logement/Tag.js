import styled from "styled-components";

export default function Tag({ name }) {
  return <TagStyled>{name}</TagStyled>;
}
const TagStyled = styled.div`
  display: flex;
  min-width: 115px;
  height: 25px;
  border-radius: 10px;
  letter-spacing: 0.1px;
  background-color: #ff6060;
  color: white;
  font-size: 14px;
  margin-right: 10px;
  justify-content: center;
  padding: 5px 15px;
  align-items: center;
`;

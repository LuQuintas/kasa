import { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/images/Vector.png";
export default function Collapse({ title, texte }) {
  const [arrowOpen, setArrowOpen] = useState(false);

  const handleClick = () => {
    setArrowOpen(!arrowOpen);
  };

  return (
    <CollapseStyled onClick={handleClick}>
      <div className="collapse">
        <h2>{title}</h2>
        <img className={`arrow ${arrowOpen}`} src={arrow} alt="" />
      </div>
      <div className={`description ${!arrowOpen}`}>
        <div className="conteinerText">{arrowOpen && <span>{texte}</span>}</div>
      </div>
    </CollapseStyled>
  );
}

const CollapseStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 335px;
  margin: auto;
  font-size: 12px;

  .collapse {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff6060;
    color: #f6f6f6;
    min-height: 30px;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
    h2 {
      font-weight: 500;
      letter-spacing: 1px;
      font-size: 13px;
      margin-left: 12px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    color: #ff6060;
    border-radius: 5px;
    margin-top: -10px;
    padding-top: 15px;
    .conteinerText {
      margin: 0px 10px;
      padding-bottom: 10px;
    }
    span {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
    }
  }

  .description.true {
    background-color: white;
  }

  .arrow {
    margin-right: 8px;
    width: 15px;
    height: 9px;
  }
  .arrow.true {
    transform: rotate(180deg);
  }
`;

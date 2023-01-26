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
        {arrowOpen && <span>{texte}</span>}
      </div>
    </CollapseStyled>
  );
}

const CollapseStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 15px;
  width: 582px;

  .collapse {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff6060;
    color: #f6f6f6;
    height: 52px;
    border-radius: 10px;
    cursor: pointer;
    h2 {
      margin-left: 20px;
      font-weight: 500;
      letter-spacing: 1px;
      font-size: 18px;
    }
  }

  .description {
    z-index: -1;
    background-color: #f6f6f6;
    color: #ff6060;
    border-radius: 10px;
    margin-top: -10px;
    letter-spacing: 0.5 px;
    /* padding: 20px 15px; */
    height: 75%;
    span {
      margin: 20px;
    }
  }
  .description.true {
    min-height: 250 px;
    background-color: white;
  }

  .arrow {
    margin-right: 12px;
    width: 26px;
    height: 16px;
  }
  .arrow.true {
    transform: rotate(180deg);
  }
`;

import { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/images/ArrowCollapse.svg";
export default function Collapse({ title, texte, className }) {
  const [arrowOpen, setArrowOpen] = useState(false);

  const handleClick = () => {
    setArrowOpen(!arrowOpen);
  };

  return (
    <CollapseStyled onClick={handleClick} className={className}>
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
  max-width: 100%;
  /* min-width: 335px; */
  max-width: 1240px;
  margin: auto 20px;
  /* margin: auto; */

  .collapse {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff6060;
    color: #f6f6f6;
    min-height: 30px;
    border-radius: 5px;
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
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.8px;
    line-height: 18px;
    color: #ff6060;
    border-radius: 5px;
    margin-top: -10px;
    padding-top: 15px;
    .conteinerText {
      margin: 5px 10px;
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
  .description.false {
    margin-bottom: 30px;
    min-height: 145px;
  }

  .arrow {
    margin-right: 8px;
    width: 15px;
    height: 9px;
  }
  .arrow.true {
    transform: rotate(180deg);
  }
  @media screen and (min-width: 768px) {
    margin: auto;
    width: 70%;

    .description {
      .conteinerText {
        margin-left: 18px;
        span {
          font-size: 24px;
          font-weight: 400;
          line-height: 35px;
        }
      }
    }

    .collapse {
      height: 47px;
      h2 {
        margin-left: 18px;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
`;

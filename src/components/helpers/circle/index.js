import React from "react";
import {CaretRightFilled } from "@ant-design/icons";
import styled from "styled-components";

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
     z-index:99;
     transition: transform 0.3s ease;
     

  .outermost-circle {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border:1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  

  .outer-circle {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border:1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  
    .inner-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:hsla(0, 0%, 86%, .1);
    display: flex;
    align-items: center;
    justify-content: center;
  

  .icon {
    font-size: 30px;
    color: #fff;
  }
}
}
.outermost-circle:hover {
  transform: scale(1.05); 
}
}
`;

const DoubleCircleIcon = () => {
    return (
        <CircleContainer>
            <div className="outermost-circle">
                <div className="outer-circle">
                <div className="inner-circle">
                    <CaretRightFilled className="icon" />
                </div>
                </div>
            </div>
      </CircleContainer>
    );
  };

export default DoubleCircleIcon;

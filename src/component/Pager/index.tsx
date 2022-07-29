import React from "react";
import styled from "styled-components";

const PagerCss = styled.div`
    display:flex;
    justify-content:center;
    height:48px;
    span{
        border: 1px solid #555555;
        text-align:center;
        line-height:48px;
    }
    .number{
        width:42px;
    }
    .upDown{
        width:81px;
    }

    @media (max-width: 375px) {
        height:45px;
        margin-top:40px;
        .number{
            width:40px;
        }
        .upDown{
            width:75px;
        }
    }
`

const Pager = () => {
    return (<PagerCss className="s19">
        <span className="upDown">上一頁</span>
        <span className="number">1</span>
        <span className="number">2</span>
        <span className="number">3</span>
        <span className="number">4</span>
        <span className="number">5</span>
        <span className="upDown">下一頁</span>
    </PagerCss>)
}

export default Pager
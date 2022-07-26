import React from "react";
import HomeHeader from '../../assets/home-header.png'
import HomeHeaderSmall from '../../assets/home-header-sm.png'
import styled from "styled-components";

const HomeCss = styled.div`
    background: url(${HomeHeader}) no-repeat center;
    height:787px;
    background-size: cover;
    white-space: nowrap;
    overflow: hidden;
    .container{
        height: inherit;
        display:flex;
        flex-direction:column;
        align-items:end;
        justify-content:center;
        .header2{
            font-weight:bold;
        }
        .buyNow{
            width:104px;
            height:41px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    @media (max-width: 375px) {
        background: url(${HomeHeaderSmall}) center center;
        background-size: cover;
        height:396px;
        .header{
            font-size:16px;
        }
        .header2{
            font-size:24px;
        }
        .buyNow{
            font-weight:500;
        }
    }
`

const Home: React.FC = () => {
    return (
        <HomeCss>
            <div className="container">
                <div className="header s36 globalWordbrown">Promise-Desert 2020 早春系列</div>
                <div className="header2 s64 globalWordbrown">看得清，才能看得遠</div>
                <div className="buyNow globalRed globalWordWhite s20">立即購買</div>
            </div>
        </HomeCss>
    )
}

export default Home

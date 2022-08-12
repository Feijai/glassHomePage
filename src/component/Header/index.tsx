import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo-white.png'
import styled from "styled-components";

const host = process.env.REACT_APP_PATH
const HeaderCss = styled.div`
align-items:center;
.logo{
    margin-top:16px;
    margin-bottom:16px;
    a{
        display:block;
        background:url(${Logo});
        background-size: contain;
        height:48px;
        width:80px;
        text-indent: 101%;
        white-space: nowrap;
        overflow: hidden;
    }
}

ul{ 
    width:512px;
    height:30px;
    align-self:center;
    li{
        font-family: 'SansTC';
        width:80px;
        text-align:center;
        a{
            text-decoration: none;
        }
    }
}
@media (max-width: 768px){
    .container{
        padding-top:0px;
        padding-bottom:0px;
    }

}

@media (max-width: 720px){
    .container {
        flex-wrap: wrap;
        justify-content:center;
    }
    ul{ 
        flex-wrap: wrap;
        width:100%;
        height:auto;
        li{ 
            min-width:50%;
            border: 1px solid #FFFFFF;
            height:48px;
            display:flex;
            align-items:center;
            justify-content: center;
        }
    }
}
`

const Header: React.FC = () => {
    return <HeaderCss className='globalRed'>
        <div className="container dfjcsb">
            <div className="logo">
                <Link to="/" />

            </div>
            <ul className="dfjcsb">
                <li >
                    <Link to="/classFrame" className='globalWordWhite s20'>系列鏡框</Link>
                </li>
                <li>
                    <Link to="/location" className='globalWordWhite s20'>門市據點</Link>
                </li>
                <li>
                    <Link to="/blog" className='globalWordWhite s20'>部落格</Link>
                </li>
                <li>
                    <Link to="/question" className='globalWordWhite s20'>常見問題</Link>
                </li>
            </ul>
        </div>
    </HeaderCss>
}

export default Header
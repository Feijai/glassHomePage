import React from "react";
import styled from "styled-components";
import bg from '../../assets/index-bg.png'
import bg2 from '../../assets/index-bg-md.png'
import p1 from '../../assets/home-section4-1.png'
import p2 from '../../assets/home-section4-2.png'
import p3 from '../../assets/home-section4-1-sm.png'
import p4 from '../../assets/home-section4-2-sm.png'

const DisGlassFrameCss = styled.div`
    background: url(${bg}) center center;
    .container{
        text-align:center;
        h2{
            font-weight:bold;
        }
        ul{ 
            display:flex;
            margin-top:48px;
            li{
                div{
                    width:648px;
                    height:240px;
                }
                .double{
                    background:url(${p1}) center center;
                    background-size: cover;
                }
                .youth{
                    background:url(${p2}) center center;
                    background-size: cover;

                }
                h2{
                    height:88px;
                    font-family:Italic;
                    font-weight:bold;
                }
            }
        }
    }
    @media (max-width: 375px) {
        background: url(${bg2}) center center;
        .container{
            padding-top:40px;
            padding-bottom:40px;
        h2{
            font-size:24px;
        }
        ul{ 
            display:block;
            li{
                margin-top:24px;
                div{
                    margin: 0 auto;
                    width:348px;
                    height:240px;
                }
                .double{
                    background:url(${p3}) center center;
                    background-size: cover;
                }
                .youth{
                    background:url(${p4}) center center;
                    background-size: cover;

                }
                h2{ 
                    margin:0 auto;
                    font-size:48px;
                    width:348px;
                }
            }
        }
    }
    }
`

const DisGlassFrame: React.FC = () => {
    return <DisGlassFrameCss>
        <div className="container paddingTB80">
            <h2 className="globalWordWhite s48">聯名設計鏡框</h2>
            <ul>
                <li><div className="double" /><h2 className="globalWhite dfjccalc s48 globalWordRed"><p>DOUBLE A+</p></h2></li>
                <li><div className="youth" /><h2 className="globalWhite dfjccalc s48 globalWordRed">YOUTH</h2></li>
            </ul>

        </div>
    </DisGlassFrameCss>
}


export default DisGlassFrame
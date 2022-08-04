import React from "react"
import styled from "styled-components"
import p1 from '../../assets/home-section3-1.png'
import p2 from '../../assets/home-section3-2.png'
import p3 from '../../assets/home-section3-3.png'

const GlassFrameCss = styled.div`
    .container{
        text-align:center;
        h2{
            font-weight:bold;
        }
        ul{
            margin-top:48px;
            li{ 
                width:32.1%;
                img{
                    max-height:416px;
                    width:100%;
                }
                h2{
                    margin-top:8px;
                    font-family:Italic;
                }
                p{
                    overflow:hidden;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .container{
            padding-bottom:56px;
            ul{
                display:block;
                li{
                    margin:0 auto;
                    margin-bottom:24px;
                    width:48.27%;
                }
            }
        }
    }

    @media (max-width: 375px) {
        .container{
            padding-top:40px;
            padding-bottom:40px;
            h2{
                font-size:24px;
            }
            ul{
                margin-top:0px;
                li{
                    width:100%;
                    padding-top:24px;
                    img{
                        height:100%;
                    }
                    h2{
                        width:100%;
                        font-size:48px;
                    }
                }
            }
        }
    }

`
const GlassFrame: React.FC = () => {
    return (<GlassFrameCss>
        <div className="container paddingTB80">
            <h2 className="s48 globalWordbrown">經典系列鏡框</h2>
            <ul className="dfjcsb">
                <li><img src={p1} alt="OPTICAL" /><h2 className="s48 globalWordRed"><p>OPTICAL</p></h2></li>
                <li><img src={p2} alt="SUNGLASSES" /><h2 className="s48 globalWordRed"><p>SUNGLASSES</p></h2></li>
                <li><img src={p3} alt="FUNCTIONAL" /><h2 className="s48 globalWordRed"><p>FUNCTIONAL</p></h2></li>
            </ul>
        </div>
    </GlassFrameCss>
    )
}

export default GlassFrame
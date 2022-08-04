
import React from "react";
import styled from "styled-components";
import section1 from '../../assets/home-section2-1.png'
import section2 from '../../assets/home-section2-2.png'
import section3 from '../../assets/home-section2-3.png'
import section4 from '../../assets/home-sectioin2-4.png'

const ProfessionalCss = styled.div`
    .container{
        .head{
            text-align:center;
            font-weight:bold;
        }
        ul{
            text-align:center;
            margin-top:20px;
            display:flex;
            justify-content:space-between;
            li{
                padding:12px;
                width:25%;
            }
            img{
                margin:0 auto;
                width:83px;
                height:83px;
            }
            .word1{
                margin-top:24px;
                font-weight:bold;
            }
            .word2{
                margin-top:8px;
                text-align:left;
            }
        }
    }
    @media (max-width: 768px) {
        .container{
            ul{
                flex-wrap: wrap;
                li{
                    padding:0px;
                    width:50%;
                }
            }
        }
    }
    @media (max-width: 375px) {
        .container{
            padding-top: 28px;
            padding-bottom: 28px;
            .head{
            font-size:24px;
            }
            ul{
                display: block;
                li{
                    width:100%;
                    img{
                        margin:0 auto;
                    }
                }
            }
        }
    }

`

const Professional = () => {
    return (<ProfessionalCss className="globalWhite ">
        <div className="container paddingTB80">
            <h2 className="head s48 globalWordbrown">用專業的心，做專業的事</h2>
            <ul>
                <li>
                    <div>
                        <img src={section1} alt="單一價格" />
                        <h2 className="word1 s24 globalWordbrown">單一價格</h2>
                        <h5 className="word2 s16">無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</h5>
                    </div>
                </li>
                <li>
                    <div><img src={section2} alt="20 分鐘即可取件" />
                        <h2 className="word1 s24 globalWordbrown">20 分鐘即可取件</h2>
                        <h5 className="word2 s16">為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。</h5>
                    </div>
                </li>
                <li>
                    <div><img src={section3} alt="安心售後服務" />
                        <h2 className="word1 s24 globalWordbrown">安心售後服務</h2>
                        <h5 className="word2 s16">我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。</h5>
                    </div>
                </li>
                <li>
                    <div><img src={section4} alt="關於鏡片" />
                        <h2 className="word1 s24 globalWordbrown">關於鏡片</h2>
                        <h5 className="word2 s16">使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</h5>
                    </div>
                </li>
            </ul>
        </div>
    </ProfessionalCss>
    )
}
export default Professional
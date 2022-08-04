import React from "react";
import styled from "styled-components";

const QuestionCss = styled.div`
    margin-top:96px;
    margin-bottom:68px;
    .container{
        h1{
            font-weight:bold;
            padding-left:16px;
            border-left:8px solid #9F1213;
        }
        h2{
            margin-top:32px;
            font-weight:bold;
        }
    }
    ul{
        margin-top:24px;
        li{
            margin-bottom:32px;
            h3{
                font-weight:bold;
            }
            p{
                margin-top:8px;
            }
        }
    }
    @media (max-width: 375px) {
        margin-top:40px;
        margin-bottom:40px;
        .container{
            h1{
                font-size:24px;
            }
            h2{
                margin-top:24px;
            }
        }
        ul{
            li{
                margin-bottom:24px;
            }
        }
    }
`

const Question = () => {
    return (<QuestionCss>
        <div className="container">
            <h1 className="s48">常見問題</h1>
            <h2 className="s24">我想詢問配鏡問題</h2>
            <ul>
                <li>
                    <h3 className="s20">Q1.請問可否自備鏡框單配鏡片？</h3>
                    <p className="s16">A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                        當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 <br />
                        他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。</p>
                </li>
                <li>
                    <h3 className="s20">Q2.眼鏡都可以20分鐘取件嗎？</h3>
                    <p className="s16">A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                        當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 <br />
                        他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。</p>
                </li>
                <li>
                    <h3 className="s20">Q3.散光鏡片需要額外加價嗎？</h3>
                    <p className="s16">A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                        當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。<br />
                        他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。</p>
                </li>
                <li>
                    <h3 className="s20">Q4.我可以使用舊眼鏡的度數配鏡片嗎？</h3>
                    <p className="s16">A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                        當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。<br />
                        他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。</p>
                </li>
                <li>
                    <h3 className="s20">Q5.請問可以單購買鏡框嗎？</h3>
                    <p className="s16">A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                        當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。<br />
                        他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。</p>
                </li>
            </ul>
        </div>
    </QuestionCss>)
}


export default Question
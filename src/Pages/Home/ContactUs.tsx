import React from "react";
import styled from "styled-components";

const ContactUsCss = styled.div`
    .container{
        max-width:636px;
        .head{
            text-align:center;
            font-weight:bold;
        }
        .text{
            margin-top:48px;
        }
        .form{
            margin-top:24px;

                span{
                    margin-top:16px;
                    display:block;
                }
                input{
                    margin-top:8px;
                    width:100%;
                    height:38px;
                }
                .comment{
                    height:136px;
                }
                .agree{
                    margin-top:16px;
                    display:flex;
                    align-items:center;
                    .checkbox{
                        height:24px;
                        width:24px;
                    }
                }
            
        }
    }
`

const ContactUs = () => {
    return (<ContactUsCss className="globalWhite">
        <div className="container paddingTB80">
            <h2 className="head s48 globalWordbrown">聯絡我們</h2>
            <div className="text s20">我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。</div>
            <div className="form">
                <span className="s16">姓名</span>
                <input className="name" type="text" placeholder="吳彥祖" />
                <span className="s16">連絡電話</span>
                <input className="phone" type="text" placeholder="0937555666" />
                <span className="s16">電子郵件</span>
                <input className="mail" type="text" placeholder="example@email.com" />
                <span className="s16">意見反應</span>
                <input className="comment" type="text" placeholder="請輸入您的意見" />
                <div className="agree s16">
                    <input className="checkbox" type="checkbox" />
                    <div>我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</div>
                </div>
            </div>
        </div>
    </ContactUsCss>)
}

export default ContactUs
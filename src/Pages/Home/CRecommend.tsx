import React from "react";
import styled from "styled-components";
import p1 from '../../assets/home-section5-1.png'
import p2 from '../../assets/home-section5-2.png'
import p3 from '../../assets/home-section5-3.png'
import p4 from '../../assets/home-section5-4.png'

const CRecommendCss = styled.div`
    .container{
        .head{
            text-align:center;
            font-weight:bold;
        }
    }
    .cards{
        margin-top:48px;
    }
    .card{
        box-shadow: 0px 2px 6px #00000029;
        width:23.6%;
        img{
            width:100%;
            max-height:306px;

        }
        .words{
            padding:16px;
            height:205px;
            width:100%;
            position:relative;
            .name{
                font-weight:500;
            }
            .comment{
                margin-top:8px;
            }
            .date{
                position:absolute;
                bottom:16px;
            }
        }
    }
    @media (max-width: 768px) {
        .container{
        }
        .cards{
            margin-top:24px;
            flex-wrap:wrap;
        }
        .card{
            margin-top:24px;
            width:48.275%;
        }
    }
    @media (max-width: 375px) {
        .container{
            padding-top:40px;
            padding-bottom:40px;
            .head{
                font-size:24px;
            }
        }
        .cards{
            display:block;
            margin-top:8px;
        }
        .card{
            width:100%;
            margin-top:16px;
            img{
                margin:0 auto;
            }
            .words{
                margin:0 auto;
            }
        }
    }
`
const CRecommend = () => {
    return (<CRecommendCss>
        <div className="container paddingTB80">
            <h2 className="head s48 globalWordbrown">顧客推薦</h2>
            <div className="cards dfjcsb" >
                <div className="card">
                    <img src={p1} alt="" />
                    <div className="words">
                        <h3 className="s16 name">Jessy</h3>
                        <div className="comment s16">眼鏡品質優良，下次還會想來這邊購買！</div>
                        <div className="s14 date">2021/06/20</div>
                    </div>
                </div>
                <div className="card">
                    <img src={p2} alt="" />
                    <div className="words">
                        <h3 className="s16 name">凱倫</h3>
                        <div className="s16 comment">做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</div>
                        <div className="s14 date">2021/04/18</div>
                    </div>
                </div>
                <div className="card">
                    <img src={p3} alt="" />
                    <div className="words">
                        <h3 className="s16 name">悠悠</h3>
                        <div className="s16 comment">謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</div>
                        <div className="s14 date">2020/12/25</div>
                    </div>
                </div>
                <div className="card">
                    <img src={p4} alt="" />
                    <div className="words">
                        <h3 className="s16 name">Kyuan</h3>
                        <div className="s16 comment">服務很好，品質沒有任何問題，非常喜歡。</div>
                        <div className="s14 date">2020/10/31</div>
                    </div>
                </div>
            </div>
        </div>
    </CRecommendCss>)
}
export default CRecommend;
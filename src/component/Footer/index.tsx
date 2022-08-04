import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fb from '../../assets/ic-social-fb.png'
import ig from '../../assets/ic_social_ig.png'
import lk from '../../assets/ic_social_line.png'
import phone from '../../assets/Phone.png'
import mail from '../../assets/Mail.png'

const FooterCss = styled.div`
.header{
    ul{
        margin-top:48px;
        align-items:center;
        font-family: 'SansTC';
        display:flex;
        justify-content:space-between;
        width:35.8%;
        li a{
            text-decoration: none;
        }
    }
    div{
        margin-top:48px;
        display :flex;
        justify-content:space-between;
        width:16.05%;
        img{
            width:48px;
            height:48px
    }}
}
.mid{
    margin-top:24px;
    div{
    display:flex;
        img{
            width:36px;
            height:36px;
            align-self:center;
        }
        }
    .phonIcon{
            display:none;
    }
}
.number{
        margin-left:22px;
        text-align: left;
        font-family: 'SansTC';
    }

.mid2{
    display:flex;
    margin-top:8px;
    img{
        width:40px;
        height:32px;
        align-self:center;
    }
}
hr{
    margin-top:32px;
    height:1px;
}
.footer{
    margin-top:32px;

    .reserved{    
        margin-bottom:32px;
    }
    .terms{
        width:174px;
    }
}
@media (max-width: 768px){
    .header{
        ul{
            margin-top:20px;
            width:66.67%;
        }
        div{
            margin-top:20px;
            width:21.84%;
            img{
                width:40px;
                height:40px
            }
        }
    }
}
@media (max-width: 375px){
    .container{
        padding:16px
    }
    .header{
        display:none;
    }
    .mid{
        margin-top:11px;
        display:flex;
        justify-content:space-between;
        div{
            img{
                width:18px;
                height:18px;
            }
        }
        .phonIcon{
            display:flex;
            img{
                width:24px;
                height:24px;
            }
        }
    }
    .mid2{
        img{
            width:20px;
            height:16px;
        }
    }
    hr{margin-top:24px;}
    .number{
        margin-left:11px;
        text-align: left;
        font-family: 'SansTC';
        font-size:16px;
    }
    .footer{
        display: contents;
        margin-top:16px;
        .reserved{
            margin-bottom:0px;
            font-size:16px;
        }
        .terms{
        display:contents;
        margin-bottom:8px;
        div{
            margin-top:8px;
        }
    }
    }

}


`

const Footer: React.FC = () => {
    return (
        <FooterCss className="globalRed">
            <div className="container">
                <div className="header dfjcsb">
                    <ul className="dfjcsb s16">
                        <li><Link to="/glassHomePage" className='globalWordWhite '>首頁</Link></li>
                        <li><Link to="/glassHomePage/classFrame" className='globalWordWhite '>系列鏡框</Link></li>
                        <li><Link to="/glassHomePage/location" className='globalWordWhite '>門市據點</Link></li>
                        <li><Link to="/" className='globalWordWhite'>部落格</Link></li>
                        <li><Link to="/glassHomePage/question" className='globalWordWhite'>常見問題</Link></li>
                    </ul>
                    <div>
                        <img src={fb} alt="fb" />
                        <img src={ig} alt="ig" />
                        <img src={lk} alt="lk" />
                    </div>
                </div>
                <div className="mid">
                    <div>
                        <img src={phone} alt="phone" />
                        <div className="number globalWordWhite s36">0800-000-000</div>
                    </div>
                    <div className="phonIcon" >
                        <img src={fb} alt="fb" />
                        <img src={ig} alt="ig" />
                        <img src={lk} alt="lk" />
                    </div>
                </div>
                <div className="mid2">
                    <img src={mail} alt="mail" />
                    <div className="number globalWordWhite s36">glasses@business.com</div>
                </div>
                <hr />
                <div className="footer globalWordWhite dfjcsb">
                    <div className="reserved s16">Copyright © 2020 Glasses.All rights reserved.</div>
                    <div className="terms dfjcsb">
                        <div className="s14">隱私權政策</div>
                        <div className="s14">服務條款</div>
                    </div>
                </div>
            </div>
        </FooterCss>)
}

export default Footer
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
        width:464px;
        li a{
            text-decoration: none;
        }
    }
    div{
        margin-top:48px;
        display :flex;
        justify-content:space-between;
        width:208px;
        img{
            width:48px;
            height:48px
    }}
}
.mid{
    display:flex;
    margin-top:24px;
    margin-left:17%;
    img{
        width:36px;
        height:36px;
        align-self:center;
    }
    .number{
        margin-left:22px;
        text-align: left;
        font-family: 'SansTC';
        font-size: 36px;
        line-height: 1.5;
        font-weight: 500;
    }
}

.mid2{
    display:flex;
    margin-top:8px;
    margin-left:17%;
    img{
        width:40px;
        height:32px;
        align-self:center;
    }
    .number{
        margin-left:22px;
        text-align: left;
        font-family: 'SansTC';
        font-size: 36px;
        line-height: 1.5;
        font-weight: 500;
    }
}

`

const Footer: React.FC = () => {
    return (
        <FooterCss className="globalRed">
            <div className="header dfjcsa">
                <ul className="dfjcsb s16">
                    <li><Link to="/" className='globalWordWhite '>首頁</Link></li>
                    <li><Link to="/" className='globalWordWhite '>系列鏡框</Link></li>
                    <li><Link to="/" className='globalWordWhite '>門市據點</Link></li>
                    <li><Link to="/" className='globalWordWhite'>部落格</Link></li>
                    <li><Link to="/" className='globalWordWhite'>常見問題</Link></li>
                </ul>
                <div>
                    <img src={fb} alt="fb" />
                    <img src={ig} alt="ig" />
                    <img src={lk} alt="lk" />
                </div>
            </div>
            <div className="mid">
                <img src={phone} alt="phone" />
                <div className="number globalWordWhite">0800-000-000</div>
            </div>
            <div className="mid2">
                <img src={mail} alt="mail" />
                <div className="number globalWordWhite">glasses@business.com</div>
            </div>
            <hr />
            <div>123</div>
        </FooterCss>)
}

export default Footer
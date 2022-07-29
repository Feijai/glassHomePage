import React from "react";
import styled from "styled-components";

interface GlassCardProps extends GlassCardCssProps {
    img: string;
}

interface GlassCardCssProps {
    type: string;
    imgWidth: string;
    imgHeight: string;
}

const GlassCardCss = styled.div<GlassCardCssProps>`
    width:${(props) => (props.imgWidth)};
    margin-bottom:80px;
    img{
        height:${(props) => (props.imgHeight)};
    }
    .money{
        font-weight:500;
    }
    .color{
        input{
            height:24px;
            width:24px;
        }
    }
    input{
        margin:0 8px 0 0 ;
        border-radius: 4px;
    }

    @media (max-width: 375px) {
        margin:0 auto;
        width:348px;
        margin-bottom:24px;
        img{
            width:100%;
            height:${(props) => (props.type === 'OPTICAL' ? "168px" : "224px")}
        }
    }
`

const GlassCard: React.FC<GlassCardProps> = ({ type, img, imgWidth, imgHeight }) => {
    return (<GlassCardCss type={type} imgWidth={imgWidth} imgHeight={imgHeight} >
        <img src={img} alt="" />
        <div className="detail dfjcsb">
            <span className="product s24">BJ41600S</span>
            <span className="money s24 globalWordRed">NTD3,490</span>
        </div>
        <div className="color">
            <input type="text" className="globalInputCoffee coffee" readOnly
                onClick={() => console.log(123)} />
            <input type="text" className="globalInputTan tan" readOnly />
        </div>
    </GlassCardCss>)
}

export default GlassCard
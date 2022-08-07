import React from "react";
import Pager from "../../component/Pager";
import styled from "styled-components";
import { dataArray } from "./data";
import { dataProps } from "./interface";

const BlogCss = styled.div`
    h1{
        border-left:8px solid #9F1213;
        padding-left:16px;
        margin-bottom:36px;
    }
    .cards{
        margin-bottom:124px;
        display:flex;
        flex-wrap:wrap;
        row-gap:60px;
    }

    .textCard{
        img{
            max-width:636px;
            width:100%;
            max-height:400px;
        }
    }
    .contain{
        margin-left:24px;
        position:relative;
        .secondTitle{
            font-family:'Italic';
            font-weight: bold;
        }
        .text{
            margin-top:16px;
        }
        .more{
            position:absolute;
            font-family:'Italic';
            font-weight: bold;
            bottom:0;
            right:0;
        }
        .text2{
            display:none
        }
    }
    @media (max-width: 981px) {
        .container{
            margin-top:44px;
        }
        .textCard{
            max-height:208px;
            img{
                max-width:336px;
                width:100%;
            }
        }
        .contain{
            h2{
                font-size:24px;
            }
            .secondTitle{
                font-size:16px;
            }
            .text{
                display:none;
            }
            .more{
                display:none;
            }
            .text2{
                display:block;
            }
        }
    }
    @media (max-width: 710px) {
        .container{
            margin-top:4px;
            margin-bottom:30px;
        }
        .cards{
            row-gap:24px;
            margin-bottom:64px;
        }

        .textCard{
            max-width:348px;
            max-height:100%;
            flex-wrap: wrap;
            .contain{
                margin-left:0px;
                width:100%
            }
            h2{
                margin-top:8px;
            }
            img{
                max-width:348px;
                height:208px;
            }
            .text2{
                display:none;
            }
        }
    }
`

const TextCard: React.FC<dataProps> = (data) => {
    return (
        <div className="textCard dfjcsb">
            <img src={data.src} alt="" />
            <div className="contain">
                <h2 className="s32 globalWordbrown">{data.head}</h2>
                <div className="context dfjcsb">
                    <span className="secondTitle s20">{data.context}</span>
                    <span className="time s16">{data.time}</span>
                </div>
                <div className="text s20">{data.text}</div>
                <span className="more s36 globalWordbrown">MORE</span>
                <div className="text2 s16">{data.text2}</div>
            </div>
        </div>
    )
}

const Blog: React.FC = () => {
    return (<BlogCss>
        <div className="container mgTop96 mgBot80">
            <h1 className='s48 bold'>部落格</h1>
            <div className="cards">
                {dataArray.map((data) => <TextCard {...data} />)}
            </div>
            <Pager />
        </div>
    </BlogCss>)
}

export default Blog;
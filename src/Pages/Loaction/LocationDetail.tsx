/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom'
import { Card } from './index'
import { dataProps } from './interface'
import { dataArray } from './data'
const LocationDetailCss = styled.div`
    .detail{
        display:none
    }
    h1{
        border-left:8px solid #9F1213;
        padding-left:16px;
    }
    .select{
        margin-top:32px;
        select{
            max-width:306px;
            width:306px;
            margin-left:16px;
        }
    }
    .header{
        padding:1rem 3rem;
        border-bottom: 1px solid #00000020;
    }
    .contain{
        margin-top:40px;
    }
    .card{
        max-width:526px;
        width:100%;
        img{
            width:100%;
            height:224px;
        }
        .cardContainer{
           border: 1px solid #00000020;

        }
    
    }
    ul{
        padding:16px 24px 8px 24px;
        li{
            row-gap:1rem;
            display:flex;
            margin-bottom:8px;
            span{
                width:20px;
                height:20px;
            }
            p{
                margin-left:10px;
            }
        }
    }
    .map{
        max-width:746px;
        width:100%;
    }
    
    @media (max-width: 768px) {
        .container{
            margin-top:44px;
            margin-bottom:44px;
        }
        .contain{
            display:block
        }
        .card{
            max-width:696px;
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            img{
                width:100%;
                max-width:337px;
            }
            .cardContainer{
                width:100%;
                max-width:337px;
            }
        }
        .map{
                margin-top:24px;
                max-width:696px;
                height:414px;
                /* height:100%; */
            }
    }
    @media (max-width: 375px) {
        .container{
            margin-top:40px;
            margin-bottom:64px;
        }
        h1{
            font-size:24px;
        }
        .select{
            margin-top:24px;
            h2{
                font-size:16px;
            }
            select{
                max-width:276px;
                margin-left:8px;
                font-size:18px;
            }
        }
        .contain {
            margin-top:24px;
        }

        .card{
            max-width:348px;
            img{
                max-width:348px;
            }
            .cardContainer{
                max-width:348px;
            }
        }
        .map{
            height:208px;
        }
    }
`
const LocationDetail: React.FC = () => {
    const state = useLocation().state as dataProps
    const [sel, setSel] = useState<number>(state.id)
    const data: dataProps[] = dataArray.filter(ele => ele.id === sel)

    return (<LocationDetailCss>
        <div className="container mgTop96 mgBot80">
            <h1 className='s48 bold'>門市據點</h1>
            <div className='dflex select'>
                <h2 className='s24'>選擇分店</h2>
                <select value={sel} onChange={(e) => { setSel(parseInt(e.target.value)) }} className='s18'>
                    <option value={1}>台北中山旗艦店</option>
                    <option value={2}>台北綠園店</option>
                    <option value={3}>台中清水旗艦店</option>
                    <option value={4}>高雄中正形象店</option>
                    <option value={5}>高雄夢時代店</option>
                </select>
            </div>

            <div className="contain dfjcsb">
                <Card  {...data[0]} />
                <div className="map">
                    <iframe src={data[0].src} width="100%" height="100%"
                        style={{ border: 0 }} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    </LocationDetailCss>)
}

export default LocationDetail
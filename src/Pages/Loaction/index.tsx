import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { dataArray } from './data'
import { HeaderSelectProps, dataProps } from './interface'

const LoactionCss = styled.div`
    h1{
        border-left:8px solid #9F1213;
        padding-left:16px;
    }
    .select{
        h2{
            padding-right:2rem;
        }
        select{
            width:304px;
            height:38px;
            /* font-size:18px; */
        }
    }
    .header{
        padding:1rem 3rem;
        border-bottom: 1px solid #00000020;
    }
    .cards{
        margin-top:5rem;
        display:flex;
        flex-wrap:wrap;
        column-gap:3rem;
        row-gap:6rem;
        .card{
            max-width:416px;
            img{
                width:100%;
                height:224px;
            }
            .cardContainer{
                border: 1px solid #00000020;
            }
        }
    }
    .detail{
        padding:16px;
    }
    ul{
        padding:16px 24px;
        li{
            display:flex;
            span{
                width:20px;
                height:20px;
            }
            p{
                margin-left:10px;
            }
        }
    }
    @media (max-width: 768px) {
        .container{
            padding-top:0px;
            padding-bottom:0px;
        }
        .cards{
            row-gap:3rem;
            .card{
                max-width:336px;

            }
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
                padding-right:1rem;
            }
            select{
                font-size:18px;
                max-width:276px;
            }
        }
        .cards{
            .card{
                max-width:348px;

            }
        }
    }
`
export const Card: React.FC<dataProps> = (data) => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate("/glassHomePage/location/detail", { replace: true, state: { ...data } });
    }
    return (
        <div className="card">
            <img src={data.pic} alt="" />
            <div className="cardContainer">
                <h3 className='s24 header'>{data.header}</h3>
                <ul>
                    <li>
                        <span className='icon material-symbols-outlined'>call</span>
                        <p className='s20'>{`電話：${data.phone}`}</p>
                    </li>
                    <li>
                        <span className="icon material-symbols-outlined">schedule</span>
                        <p className='s20'>{`營業時間：${data.time}`}</p>
                    </li>
                    <li>
                        <span className='icon material-symbols-outlined'>location_on</span>

                        <p className='s20'>{`地址：${data.address}`}</p>
                    </li>
                </ul>
                <div className='detail globalWordWhite globalInputBlack dfjccaic s19'
                    onClick={() => { handleOnClick() }}
                >詳細資訊</div>
            </div>
        </div>
    )
}

const HeaderSelect: React.FC<HeaderSelectProps> = ({ sel, setSel }) => {
    return (
        <>
            <h1 className='s48 bold'>門市據點</h1>
            <div className='dflex mgTop36 select'>
                <h2 className='s24'>選擇地區</h2>
                <select value={sel} onChange={(e) => { setSel(e.target.value) }} className='s18'>
                    <option value="all">全部</option>
                    <option value="tp">台北市</option>
                    <option value="tc">台中市</option>
                    <option value="kh">高雄市</option>
                </select>
            </div>
        </>
    )
}

const Location: React.FC = () => {
    const [sel, setSel] = useState<string>('all')


    const dataprocess = (dataArray: dataProps[], sel: string) => {
        return sel !== 'all'
            ? dataArray.filter((data) => data.location === sel)
            : dataArray
    }

    return (<LoactionCss>
        <div className="container mgTop96 mgBot80">
            <HeaderSelect sel={sel} setSel={setSel} />
            <div className='cards'>
                {dataprocess(dataArray, sel).map((data, idx) => {
                    return <Card {...data} key={idx} />
                })}
            </div>
        </div>
    </LoactionCss>)
}

export default Location
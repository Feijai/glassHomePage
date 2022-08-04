import React, { useState } from 'react'
import styled from 'styled-components'
import p1 from '../../assets/store-1.png'
import p2 from '../../assets/store-2.png'
import p3 from '../../assets/store-3.png'
import p4 from '../../assets/store-4.png'
import p5 from '../../assets/store-5.png'

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
            border: 1px solid #00000020;
            img{
                width:100%;
                height:224px;
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
interface HeaderSelectProps {
    sel: string;
    setSel: React.Dispatch<React.SetStateAction<string>>;
}

interface dataProps {
    id: number
    pic: string;
    header: string;
    phone: string;
    time: string;
    location: string;
    address: string;
}

const Card: React.FC<dataProps> = (data) => {
    const handleOnClick=() =>{
        
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
                    onClick={()=>{handleOnClick()}}
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
                    <option selected value="all">全部</option>
                    <option selected value="tp">台北市</option>
                    <option value="tc">台中市</option>
                    <option value="kh">高雄市</option>
                </select>
            </div></>
    )
}

const Location: React.FC = () => {
    const [sel, setSel] = useState<string>('all')
    const dataArray: dataProps[] =
        [{ id: 1, pic: p1, header: '台北中山旗艦店', phone: '(02)000-1234', time: '10:00-21:00', location: 'tp', address: '台北市中山區南京東路25巷2-1號', },
        { id: 2, pic: p2, header: '台北綠園店', phone: '(02)000-2345', time: '10:00-21:00', location: 'tp', address: '台北市中正區復興南路 132-1 號' },
        { id: 3, pic: p3, header: '台中清水旗艦店', phone: '(04)000-1234', time: '10:00-21:00', location: 'tc', address: '台中市清水區經南一路 23 號 8 樓' },
        { id: 4, pic: p4, header: '高雄中正形象店', phone: '(07)000-2345', time: '10:00-21:00', location: 'kh', address: '高雄市苓雅區中正路 38 號 12 樓' },
        { id: 5, pic: p5, header: '台北中山旗艦店', phone: '(07)000-3456', time: '10:00-21:00', location: 'kh', address: '高雄市前鎮區中華一路 63 號 6 樓' }]

    const dataprocess = (dataArray: dataProps[], sel: string) => {
        return sel !== 'all'
            ? dataArray.filter((data) => data.location === sel)
            : dataArray
    }

    return (<LoactionCss>
        <div className="container mgTop96 mgBot80">
            <HeaderSelect sel={sel} setSel={setSel} />
            <div className='cards'>
                {dataprocess(dataArray, sel).map((data) => {
                    return <Card {...data} />
                })}
            </div>
        </div>
    </LoactionCss>)
}

export default Location
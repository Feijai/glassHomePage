import React, { useState } from "react";
import styled from "styled-components";
import p1 from '../../assets/product-header-3.png'
import p2 from '../../assets/product-header-4.png'
import p3 from '../../assets/product-header-1.png'
import p4 from '../../assets/product-header-2.png'
import OpticalPage from "./OpticalPage";
import SunglassPage from "./SunglassPage";

const GlassFrameCss = styled.div`
    .container{
        display:flex;
        h2{
            position:relative;
            width:33.33%;
            height:96px;
            font-weight:bold;
            border: 1px solid #DCDCDC;
            .unerLine{
                position:absolute;
                bottom:0;
                width:100%;
                height:8px;
            }
        }

    }
    .headPage{
        img{
            width:50%;
            height:296px;
        }
    }
    @media (max-width: 375px) {
        .container{
            h2{
                font-size:16px;
                height:56px;
            }
        }
        .headPage{
            img{
                height:136px;
            }
    }

    }
`
const GlassFrame: React.FC = () => {
    const [page, setPage] = useState<string>('OPTICAL')
    const handleChangePage = (word: string): void => {
        setPage(word)
    }
    return (
        <>
            <GlassFrameCss>
                <div className="container ">
                    <h2 className="s32 dfjccaic" onClick={() => handleChangePage('OPTICAL')}>
                        <span>OPTICAL</span>
                        {page === 'OPTICAL' && <div className="unerLine globalRed"></div>}
                    </h2>
                    <h2 className="s32 dfjccaic" onClick={() => handleChangePage('SUNGLASSES')}>
                        <span>SUNGLASSES</span>
                        {page === 'SUNGLASSES' && <div className="unerLine globalRed"></div>}
                    </h2>
                    <h2 className="s32 dfjccaic"><span>FUNCTIONAL</span></h2>
                </div>
                <div className="headPage">
                    {page === 'OPTICAL' ?
                        <>
                            <img src={p1} alt="" />
                            <img src={p2} alt="" />
                        </>
                        :
                        <>
                            <img src={p3} alt="" />
                            <img src={p4} alt="" />
                        </>
                    }
                </div>

            </GlassFrameCss>
            {page === 'OPTICAL' && <OpticalPage type={page}/>}
            {page === 'SUNGLASSES' && <SunglassPage type={page}/>}
        </>
    )
}

export default GlassFrame;
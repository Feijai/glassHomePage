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
`
const GlassFrame: React.FC = () => {
    const [page, setPage] = useState<string>('OPTICAL')
    const handleChangePage = (word: string): void => {
        setPage(word)
    }
    return <GlassFrameCss>
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
        {page === 'OPTICAL' &&
            <>
                <div className="headPage">
                    <img src={p1} alt="" />
                    <img src={p2} alt="" />
                </div>
                <OpticalPage />
            </>
        }
        {page === 'SUNGLASSES' &&
            <>
                <div className="headPage">
                    <img src={p3} alt="" />
                    <img src={p4} alt="" />
                </div>
                <SunglassPage />
            </>
        }

    </GlassFrameCss>
}

export default GlassFrame;
import React from "react";
import styled from "styled-components";
import p1 from '../../assets/product-1.png'
import p2 from '../../assets/product-2.png'
import p3 from '../../assets/product-3.png'
import p4 from '../../assets/product-4.png'
import p5 from '../../assets/product-5.png'
import p6 from '../../assets/product-6.png'
import Pager from "src/component/Pager";
import GlassCard from "src/component/GlassCard";

interface OpticalPageProps {
    type: string
}

const OpticalPageCss = styled.div`
    h2{
        display:block;
        text-align:center;
        font-family:Italic;
    }
    h3{
        display:block;
        text-align:center;
    }
    .cards{
        margin-top:32px;
        flex-wrap: wrap;
    }
    @media (max-width: 375px) {
        margin-top:40px;
        margin-bottom:64px;
        h2{
            font-size:24px;
        }
        h3{
            font-size:24px;
        }
        .cards{
            margin-top:24px;
        }
    }
`
const OpticalPage: React.FC<OpticalPageProps> = ({ type }) => {
    const useImageArray = [p1, p2, p3, p4, p5, p6, p1, p2, p3, p4, p5, p6]
    return (<OpticalPageCss className="container">
        <h2 className="s42">Celluloid Combi</h2>
        <h3 className="s32">賽璐珞鈦金屬混合鏡框</h3>
        <div className="cards dfjcsb">
            {useImageArray.map((e) => {
                return <GlassCard type={type} img={e} imgWidth={'306px'} imgHeight={'168px'} />
            })}

        </div>
        <Pager />
    </OpticalPageCss>)
}

export default OpticalPage
import React from "react";
import styled from "styled-components";
import GlassCard from '../../component/GlassCard'
import p1 from '../../assets/product-7.png'
import p2 from '../../assets/product-8.png'
import p3 from '../../assets/product-9.png'
import p4 from '../../assets/product-10.png'
import p5 from '../../assets/product-11.png'
import p6 from '../../assets/product-12.png'
import Pager from "src/component/Pager";

interface SunglassPageProps {
    type: string;
}

const SunglassPageCss = styled.div`
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
`
const SunglassPage: React.FC<SunglassPageProps> = ({ type }) => {
    const useImageArray = [p1, p2, p3, p4, p5, p6]
    return (<SunglassPageCss className="container ">
        <h2 className="s42">Celluloid Combi</h2>
        <h3 className="s32">賽璐珞鈦金屬混合鏡框</h3>
        <div className="cards dfjcsb">
            {useImageArray.map((e) => {
                return <GlassCard type={type} img={e} imgWidth={'416px'} imgHeight={'224px'} />
            })}
        </div>
        <Pager />
    </SunglassPageCss>)
}

export default SunglassPage
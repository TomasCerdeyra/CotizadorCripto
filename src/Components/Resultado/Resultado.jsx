import React from 'react'
import styled from '@emotion/styled'

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT23HOUR, IMAGEURL, LASTUPDATE } = resultado

    const ContRes = styled.div`
        color: #FFF;
        font-family: 'lato', sans-serif;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 30px;
    `

    const Img = styled.img`
        display: block;
        width: 120px;
`

    const Texto = styled.p`
        font-size: 18px;
        span{
            font-weight: 700;
        }
    `

    const Precio = styled.p`
        font-size: 24px;
        span{
            font-weight: 700;
        }
    `

    return (
        <ContRes>
            <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Crito" />
            <div>
                <Precio>EL precio es de {PRICE}</Precio>
                <Texto>Precio más alto del día{HIGHDAY}</Texto>
                <Texto>Precio más bajo del día {LOWDAY}</Texto>
                <Texto>Variación últimas 24Hs {CHANGEPCT23HOUR}</Texto>
                <Texto>Última Actualización {LASTUPDATE}</Texto>
            </div>
        </ContRes>
    )
}

export default Resultado
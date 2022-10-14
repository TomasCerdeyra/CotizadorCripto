import { useEffect, useState } from 'react'
import Formulario from './Components/Formulario/Formulario'
import Resultado from './Components/Resultado/Resultado'
import Spinner from './Components/Spinner/Spinner'

import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
      max-width: 900px;
      margin: 0 auto;
      width: 90%;
      @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
      }
`
const Imagen = styled.img`
      max-width: 400px;
      width: 80%;
      margin: 100px auto 0 auto;
      display: block;
`

const Heading = styled.h1`
      font-famIly: 'Lato', sans-serif;
      color: #FFF;
      text-align: center;
      font-weight: 700;
      margin-top: 80px;
      margin-bottom: 50px;
      font-size: 34px;

      &::after{
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
        margin: 10px auto 0 auto;
      }
`
const ContSpinner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});

  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setSpinner(true)
        setResultado({})

        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);

        setSpinner(false)
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='Imagen Criptomonedas'
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        <ContSpinner>
          {spinner && <Spinner />}
        </ContSpinner>
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  )
}

export default App

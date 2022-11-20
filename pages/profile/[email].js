import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../components/ui'

const PerfilUsuario = () => {
  return (
    <Layout title='usuario' description='Visita a y encuentra sus eventos'>
      <Section>

        <div>PerfilUsuario</div>
      </Section>
    </Layout>
  )
}

export default PerfilUsuario

const Section = styled.section`
  flex-direction: column;
  padding: 5rem 0rem 2rem;
  background-image: linear-gradient(to right, rgb( 0 0 0 / .6), rgb(0 0 0 / .8)), url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`
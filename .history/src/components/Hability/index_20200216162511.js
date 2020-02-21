import React from 'react'
import habilitys from './data'
import { Github } from 'styled-icons/fa-brands/Github'
import * as S from './styles' 

const Hability = () => (
  <S.HabilityWrapper>
    <S.Title>Habilidades
      <span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
    </S.Title>
    
    <div class="columns is-multiline is-mobile">
        {habilitys.map((hability, i) => {
          return (
            <div class="column is-half">
              <S.TitleHability> { hability.name } </S.TitleHability>
              <progress 
                class="progress is-large" 
                value={ hability.value }
                text="100"
                max="100"> { hability.value } %
              </progress>
            </div>
          )
        })}
    </div>

    <div>
      <span> Veja alguns dos meu projeto no github </span>
      <S.LinkButtonProfile> <Github /> Meu github </S.LinkButtonProfile>
    </div>

  </S.HabilityWrapper>
)

export default Hability
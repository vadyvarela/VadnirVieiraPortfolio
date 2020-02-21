import React from 'react'
import habilitys from './data'
import * as S from './styles' 

const Hability = () => (
  <S.HabilityWrapper>
    <S.Title>Habilidades
      <span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
    </S.Title>
    
    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        {habilitys.map((hability, i) => {
          return (
            <div class="column is-three-fifths">
              <span> { hability.name } </span>
              <progress 
                class="progress is-large" 
                value={ hability.value } 
                max="100"> { hability.value } %
              </progress>
            </div>
          )
        })}
      
    </div>
  </S.HabilityWrapper>
)

export default Hability
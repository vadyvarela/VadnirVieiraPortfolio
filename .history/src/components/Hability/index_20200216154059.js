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
            <div class="column is-6 is-half-desktop">
              <span> { hability.name } </span>
              <progress 
                class="progress is-large" 
                value={ hability.value } 
                max="100"> { hability.value } %
              </progress>
            </div>
          )
        })}
        <div class="columns is-desktop">
  <div class="column">1</div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
  <div class="column">1</div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
</div>
      
    </div>
  </S.HabilityWrapper>
)

export default Hability
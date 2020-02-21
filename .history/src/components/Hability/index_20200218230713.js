import React from 'react'
import habilitys from './data'
import { Github } from 'styled-icons/fa-brands/Github'
import LogosCompany from './logos'
import * as S from './styles' 

const Hability = () => (
  <S.HabilityWrapper>
    <S.Title>Experiência e habilidades
      <span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
    </S.Title>
    <div class="columns is-multiline is-mobile">
      <div class="column is-half">
        <S.Company>
          <S.IconCompany>
            <LogosCompany/>
          </S.IconCompany>
          <S.Desc>
            <h4> 2018 - 2019 ( FullStack Developer ) </h4>
            <span> iMedia - InnovatMediaLab </span>
          </S.Desc>
        </S.Company>
      </div>
      <div class="column is-half">
        <S.Company>
          <S.IconCompany>
            <LogosCompany/>
          </S.IconCompany>
          <S.Desc>
            <h4> 2019 - 2020 ( FullStack Developer ) </h4>
            <span> Bonako </span>
          </S.Desc>
        </S.Company>
      </div>
    </div>
    
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

    <S.GithubLink>
      <span> Veja alguns dos meu projeto no github </span>
      <S.gitWrapper> 
        <S.GitWrapper title="Meu Github"> 
          <Github /> 
        </S.GitWrapper>
      </S.gitWrapper>
    </S.GithubLink>

  </S.HabilityWrapper>
)

export default Hability
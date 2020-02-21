import React from 'react'
import { Github } from 'styled-icons/fa-brands/Github'
import * as S from './styles' 

const Projects = () => (
  <S.HabilityWrapper>
    <S.Title>Projetos
      <span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
    </S.Title>
    
    <div class="columns is-multiline is-mobile">
        <div class="column is-half">
            
        </div>
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

export default Projects
import React from 'react'
import hability from './data'
import * as S from './styles' 

const Hability = () => (
    <S.HabilityWrapper>
        <S.Title>Habilidades
            <span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
        </S.Title>
        
        
        <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
            <div class="column is-three-fifths">
                <span>HTML5</span>
                <progress class="progress is-large" value="60" max="100">60%</progress>
            </div>
            <div class="column is-three-fifths">
                <span>CSS3</span>
                <progress class="progress is-large" value="60" max="100">60%</progress>
            </div>
        </div>

    </S.HabilityWrapper>
)

export default Hability
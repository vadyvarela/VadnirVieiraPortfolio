import React from 'react';
import PropTypes from 'prop-types'
import * as S from './styles'
import * as Z from "../ListWrapper/styled"

const PostItem = ({slug, category, date, timeToRead, title, description, background}) => (
    <>
        <S.Title>Meus Posts
            <span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
        </S.Title>
    
        <Z.ListWrapper>
            <S.PostItemLink>
                <S.PostItemWrapper to={slug}>
                    <S.PostItemTag background={ background }> { category } </S.PostItemTag>
                    <S.PostItemInfo>
                        <S.PostItemDate> { date } • { timeToRead } min </S.PostItemDate>
                        <S.PostItemTitle>
                            { title }
                        </S.PostItemTitle>
                        <S.PostItemDescription>
                            { description }
                        </S.PostItemDescription>
                    </S.PostItemInfo>
                </S.PostItemWrapper>
            </S.PostItemLink>
        </Z.ListWrapper>
    </>
)

PropTypes.propTypes = {
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    background: PropTypes.string,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default PostItem
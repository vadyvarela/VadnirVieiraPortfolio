import React from 'react';
import PropTypes from 'prop-types'
import * as S from './styles'

const PostItem = ({slug, category, date, timeToRead, title, description}) => (
    <S.PostItemLink>
        <S.PostItemWrapper to={slug}>
            <S.PostItemTag background="#1fa1f2"> { category } </S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate> { date } • { timeToRead } </S.PostItemDate>
                <S.PostItemTitle>
                    { title }
                </S.PostItemTitle>
                <S.PostItemDescription>
                    { description }
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

PropTypes.propTypes = {
    slug: PropTypes
}

export default PostItem
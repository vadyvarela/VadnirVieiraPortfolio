import React from 'react';

import Icons from './Icons'
import links from './content'

import * as S from './styles'

const SocialLinks = () => (
	<S.ScialLinksWrapper>
		<S.Title>Redes Sociais
			<span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
		</S.Title>
		<S.SocilaLinkList>
		<div class="columns is-multiline">
      
			{links.map((link, i) => {
				const Icon = Icons[link.label]
				
				return (
					<S.SocialLinkItem key={i}>
						<div class="column is-half">
						<S.Label> {link.label} </S.Label>
						<S.Desc> { link.desc } </S.Desc>
						</div>
						<div class="column is-half">
						<S.SocialLinkLink 
							href={link.url} 
							title={link.label} 
							target="_blank" 
							rel="noopener noreferer">
							<S.IconWrapper>
								<Icon />
							</S.IconWrapper>
						</S.SocialLinkLink>
						</div>
					</S.SocialLinkItem>
				)
			})}
			
		</S.SocilaLinkList>
	</S.ScialLinksWrapper>
)

export default SocialLinks
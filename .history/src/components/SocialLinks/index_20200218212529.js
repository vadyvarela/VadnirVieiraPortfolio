import React from 'react';

import Icons from './Icons'
import links from './content'

import * as S from './styles'

const SocialLinks = () => (
	<S.ScialLinksWrapper>
		<S.SocilaLinkList>
			<div class="columns is-multiline is-mobile">
				{links.map((link, i) => {
					const Icon = Icons[link.label]
					
					return (
						<div class="column is-half">
						<S.SocialLinkItem key={i}>
							<span> {link.label} </span>
							<span>
								<S.SocialLinkLink 
									href={link.url} 
									title={link.label} 
									target="_blank" 
									rel="noopener noreferer">
									<S.IconWrapper>
										<Icon />
									</S.IconWrapper>
								</S.SocialLinkLink>
							</span>
						</S.SocialLinkItem>
						</div>
					)
				})}
			</div>
		</S.SocilaLinkList>
	</S.ScialLinksWrapper>
)

export default SocialLinks
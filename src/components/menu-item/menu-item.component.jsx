import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';
import {
    MenuItemStyledContainer,
    BgImageStyledContainer,
    ContentStyledContainer,
    TitleStyledContainer,
    SubtitleStyledContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemStyledContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BgImageStyledContainer
            imageUrl={imageUrl}
            className='background-image'
        >
        </BgImageStyledContainer>

        <ContentStyledContainer>
            <TitleStyledContainer>{title.toUpperCase()}</TitleStyledContainer>
            <SubtitleStyledContainer>SHOP NOW</SubtitleStyledContainer>
        </ContentStyledContainer>
    </MenuItemStyledContainer>
);

export default withRouter(MenuItem);
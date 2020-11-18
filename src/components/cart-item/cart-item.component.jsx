import React from 'react';

import {CartItemContainer, ImgContainer, ItemsDetailsContainer, DetailContainer} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImgContainer src={imageUrl} alt="item" />
        <ItemsDetailsContainer>
            <DetailContainer>{name}</DetailContainer>
            <DetailContainer>{quantity} x ${price}</DetailContainer>
        </ItemsDetailsContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);
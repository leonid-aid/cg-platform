import React, {useEffect, useRef, useState, memo} from 'react';
import { RTTopmenuProps } from './RT-Topmenu.props';
import * as S from './RT-Topmenu.styles';
import { Icon } from '../Icon/RT-Icon';

const Component: React.FC<RTTopmenuProps> = ({
  label,
  ...rest
}: RTTopmenuProps) => {
  return (
    <div>
    <S.TopMenu>
    <S.RuPlaceDisplay>
    <S.RuPlacefull>
            <S.iconMontenegro>
            <Icon type="Montenegro"/>
            </S.iconMontenegro>
            <S.labelRuMon>
                <div>
                    <S.Ru>RU</S.Ru>
                    <S.Place>place</S.Place>
                </div>
                <S.Montenegro>Montenegro</S.Montenegro>
            </S.labelRuMon>
    </S.RuPlacefull>
    </S.RuPlaceDisplay>
            <S.Burgerandlabel>
            <S.Burger><S.MenuSpan><Icon type="Menu"/></S.MenuSpan></S.Burger>
            <S.Label>{label}</S.Label>
            </S.Burgerandlabel>
            <S.BotMenu>
                <S.BotMenuMessage> обьявления </S.BotMenuMessage>
                <S.BotMenuPlasement> сообщения </S.BotMenuPlasement>
                <S.BotMenuChat> кошелёк </S.BotMenuChat>
            </S.BotMenu>
            <S.Icons><S.IconsMoney><Icon type="MoneyChangeActive_no"/><S.LabelIcon>Обмен Валют</S.LabelIcon></S.IconsMoney><S.IconsShop><Icon type="ShopActive_no"/><S.LabelIcon>Справочник организаций</S.LabelIcon></S.IconsShop><S.IconsLive><Icon type="LiveActive_no"/><S.LabelIcon>Черногория LIVE</S.LabelIcon></S.IconsLive><S.Burger2><Icon type="Menu"/></S.Burger2></S.Icons>
    </S.TopMenu>
    </div>
  );
};

export const RTTopmenu = memo(Component);


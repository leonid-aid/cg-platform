import React, { memo } from "react";
import { Icon } from '../Icon/RT-Icon';
import { IconType } from '../Icon/IconType';
import * as S from './RT-BotmenuStyled'
interface IBottomMenuProps {
    Isactive: boolean;
}

const BottomMenuComponent: React.FC<IBottomMenuProps> = ({
    Isactive,
    ...rest
}: IBottomMenuProps) => {
    return (<S.BottomMenu>

  <S.BottomMenuSmall>
   {Isactive ?
   <S.ULBot>
    <S.Main>
     <S.MainIcon>
      <Icon type="Home"/>
       
     </S.MainIcon>
     <S.labelIsActive>
      Главная
     </S.labelIsActive>
    </S.Main>
    
    <S.Ads>
     <span>
      <Icon type="Mail_outline"/>
       
     </span>
     <S.labelIsActive>
      Объявления
     </S.labelIsActive>
    </S.Ads>
    <S.Message>
     <span>
      <Icon type="Chat_bubble_outline"/>
       
     </span>
     <S.labelIsActive>
      Сообщения
     </S.labelIsActive>
    </S.Message>
    <S.Purse>
     <span>
      <Icon type="Wallet"/>
       
     </span>
     <S.WalletLabel>
      Кошелёк
     </S.WalletLabel>
    </S.Purse>
   </S.ULBot>
   :
   <S.ULBotInactive>
    <S.Main>
     <S.MainIcon>
      <Icon type="Home"/>
       
     </S.MainIcon>
     <S.labelIsActive>
      Главная
     </S.labelIsActive>
    </S.Main>
    <S.AdsInactive>
     <S.IconInactive>
      <Icon type="Mail_outline"/>
       
     </S.IconInactive>
     <S.labelIsActive>
      Объявления
     </S.labelIsActive>
    </S.AdsInactive>
    <S.MessageInactive>
     <S.IconInactive>
      <Icon type="Chat_bubble_outline"/>
       
     </S.IconInactive>
     <S.labelIsActive>
      Сообщения
     </S.labelIsActive>
    </S.MessageInactive>
    <S.PurseInactive>
     <S.IconInactive>
      <Icon type="Wallet"/>
       
     </S.IconInactive>
     <S.labelIsActive>
      Кошелёк
     </S.labelIsActive>
    </S.PurseInactive>
   </S.ULBotInactive>
   }
  </S.BottomMenuSmall>
  
  <S.BottomMenuBig>
   <S.RuPlacefull>
    <S.iconMontenegro>
     <Icon type="Montenegro"/>
      
    </S.iconMontenegro>
    <S.labelRuMon>
     <div>
      <S.Ru>
       RU
      </S.Ru>
      <S.Place>
       place
      </S.Place>
     </div>
     <S.Montenegro>
      Montenegro
     </S.Montenegro>
    </S.labelRuMon>
   </S.RuPlacefull>
   <S.labelBottomMenu>
    <span>
     Общественная площадка
    </span>
    <span>
     для помощи русскоязычным
    </span>
   </S.labelBottomMenu>
   <S.telBottomMenu>
    <label>
     8(800)9500 00 20
    </label>
   </S.telBottomMenu>
   <S.infoRefBottomMenu>
    <label>
     info@ruplace.me
    </label>
   </S.infoRefBottomMenu>
  </S.BottomMenuBig>
</S.BottomMenu>    )
}

export const RTBotmenu = memo(BottomMenuComponent);

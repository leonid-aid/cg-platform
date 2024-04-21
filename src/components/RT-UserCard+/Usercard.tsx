import React, { DOMAttributes, memo, useEffect, useState } from "react";
import { Icon } from '../Icon/RT-Icon';
import { IconType } from '../Icon/IconType';
import { v4 as uuidv4 } from 'uuid';
import * as S from "./RT-UserCard.styles"
import AvatarSvg from "./Avatar";

interface UsercardProps extends DOMAttributes<HTMLDivElement> {
    sizebig: boolean;
    avatar: string;
    userName: string;
    rating: number;
    header: string;
    text: string;
};

const UsercardComponent: React.FC<UsercardProps> = ({
    sizebig,
    avatar,
    userName,
    rating,
    header,
    text,
    ...rest
}) => {
    const CardKey = uuidv4()
    const [textfull, setTextFull] = useState("Not")
    const [CardStates, setCardStates] = useState([
        { id: CardKey, Sizebig: sizebig }
    ]);
    const CardClickShow = (id: string) => {
        const updatedCardState = CardStates.map((cardstate) =>
            cardstate.id === id ? { ...cardstate, setTextFull: (textfull === "Not" ? setTextFull("Yes") : setTextFull("Not")) } : cardstate
        );
        setCardStates(updatedCardState);
    };
return (<div>
    {CardStates.map((cardState) => (
    <S.Card key={cardState.id} onClick={() => CardClickShow(cardState.id)}>
   
     <S.TopCard>
      <S.Avatar>
       <AvatarSvg/>
      </S.Avatar>
      <S.NameHeader>
       <S.NameDisplay>
        <S.Name>
         {userName}
        </S.Name>
        <S.rating>
         <S.CardIcon>
          <Icon type="Card_rating"/>
         </S.CardIcon>
         <S.RatingNumber>
          {rating}
         </S.RatingNumber>
        </S.rating>
       </S.NameDisplay>
       <S.Cardheader>
        <span>
         {header}
        </span>

       </S.Cardheader>
      </S.NameHeader>
     </S.TopCard>
     <div>
      {textfull === "Not" ?
      <div>
       {sizebig ?
       <S.TextCardBig>
        <span>
         {text}
        </span>
       </S.TextCardBig>
       :
       <S.TextCardSmall>
        <span>
         {text}
        </span>
       </S.TextCardSmall>
       }
      </div>
      :
      <S.TextCardFull>
       <span>
        {text}
       </span>
      </S.TextCardFull>
      }
      <S.TextCardIcon>
      </S.TextCardIcon>
     </div>

    <S.TopCardText>
         <Icon type="Card_text"/>
    </S.TopCardText>
    
    </S.Card>
    ))}

   </div>);
};
export const Usercard = memo(UsercardComponent);

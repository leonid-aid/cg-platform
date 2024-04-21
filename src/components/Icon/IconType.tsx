import React from "react";
import { newGuid } from "./guid"

import { ReactComponent as Airplane } from ".//files/svg_icons/Airplane.svg";
import { ReactComponent as Card_rating } from ".//files/svg_icons/CardRatingIcon.svg";
import { ReactComponent as Card_text } from ".//files/svg_icons/TextCardIcon.svg";
import { ReactComponent as Menu } from ".//files/svg_icons/Menu.svg";
import { ReactComponent as Arrow_back } from ".//files/svg_icons/Arrow_back.svg";
import { ReactComponent as Arrow_forward } from ".//files/svg_icons/Arrow_forward.svg";
import { ReactComponent as Check } from ".//files/svg_icons/Check.svg";
import { ReactComponent as Close } from ".//files/svg_icons/Close.svg";
import { ReactComponent as Circle } from ".//files/svg_icons/Circle.svg";
import { ReactComponent as Triangle } from ".//files/svg_icons/Triangle.svg";
import { ReactComponent as Square } from ".//files/svg_icons/Square.svg";
import { ReactComponent as Pentagon } from ".//files/svg_icons/Pentagon.svg";
import { ReactComponent as Hexagon } from ".//files/svg_icons/Hexagon.svg";
import { ReactComponent as Circle_outline } from ".//files/svg_icons/Circle_outline.svg";
import { ReactComponent as Triangle_outline } from ".//files/svg_icons/Triangle_outline.svg";
import { ReactComponent as Square_outline } from ".//files/svg_icons/Square_outline.svg";
import { ReactComponent as Pentagon_outline } from ".//files/svg_icons/Pentagon_outline.svg";
import { ReactComponent as Hexagon_outline } from ".//files/svg_icons/Hexagon_outline.svg";
import { ReactComponent as Fast_rewind } from ".//files/svg_icons/Fast_rewind.svg";
import { ReactComponent as Skip_previous } from ".//files/svg_icons/Skip_previous.svg";
import { ReactComponent as Play_arrow } from ".//files/svg_icons/Play_arrow.svg";
import { ReactComponent as Fast_forward } from ".//files/svg_icons/Fast_forward.svg";
import { ReactComponent as Skip_next } from ".//files/svg_icons/Skip_next.svg";
import { ReactComponent as Arrow_right } from ".//files/svg_icons/Arrow_right.svg";
import { ReactComponent as Arrow_left } from ".//files/svg_icons/Arrow_left.svg";
import { ReactComponent as Arrow_drop_up } from ".//files/svg_icons/Arrow_drop_up.svg";
import { ReactComponent as Arrow_drop_down } from ".//files/svg_icons/Arrow_drop_down.svg";
import { ReactComponent as More_vert } from ".//files/svg_icons/More_vert.svg";
import { ReactComponent as Directions_bus } from ".//files/svg_icons/Directions_bus.svg";
import { ReactComponent as Directions_transit_filled } from ".//files/svg_icons/Directions_transit_filled.svg";
import { ReactComponent as Directions_car } from ".//files/svg_icons/Directions_car.svg";
import { ReactComponent as Searsh } from ".//files/svg_icons/Searsh.svg";
import { ReactComponent as Local_taxi } from ".//files/svg_icons/Local_taxi.svg";
import { ReactComponent as Check_box } from ".//files/svg_icons/Check_box.svg";
import { ReactComponent as Check_box_filled } from ".//files/svg_icons/Check_box_filled.svg";
import { ReactComponent as Check_box_outline_blank } from ".//files/svg_icons/Check_box_outline_blank.svg";
import { ReactComponent as Add } from ".//files/svg_icons/Add.svg";
import { ReactComponent as Bookmark_border } from ".//files/svg_icons/Bookmark_border.svg";
import { ReactComponent as Bookmark } from ".//files/svg_icons/Bookmark.svg";
import { ReactComponent as Account_circle_filled } from ".//files/svg_icons/Account_circle_filled.svg";
import { ReactComponent as Person_outline } from ".//files/svg_icons/Person_outline.svg";
import { ReactComponent as Chat_bubble } from ".//files/svg_icons/Chat_bubble.svg";
import { ReactComponent as Light_mode } from ".//files/svg_icons/Light_mode.svg";
import { ReactComponent as Dark_mode } from ".//files/svg_icons/Dark_mode.svg";
import { ReactComponent as Delete } from ".//files/svg_icons/Delete.svg";
import { ReactComponent as Radio_button_checked } from ".//files/svg_icons/Radio_button_checked.svg";
import { ReactComponent as Radio_button_unchecked } from ".//files/svg_icons/Radio_button_unchecked.svg";
import { ReactComponent as Star } from ".//files/svg_icons/Star.svg";
import { ReactComponent as Star_border } from ".//files/svg_icons/Star_border.svg";
import { ReactComponent as Folder } from ".//files/svg_icons/Folder.svg";
import { ReactComponent as Navigate_before } from ".//files/svg_icons/Navigate_before.svg";
import { ReactComponent as Navigate_next } from ".//files/svg_icons/Navigate_next.svg";
import { ReactComponent as File_upload } from ".//files/svg_icons/File_upload.svg";
import { ReactComponent as File_download } from ".//files/svg_icons/File_download.svg";
import { ReactComponent as Folder_fill } from ".//files/svg_icons/Folder_fill.svg";
import { ReactComponent as Attach_file } from ".//files/svg_icons/Attach_file.svg";
import { ReactComponent as Today } from ".//files/svg_icons/Today.svg";
import { ReactComponent as Mode_edit } from ".//files/svg_icons/Mode_edit.svg";
import { ReactComponent as Share } from ".//files/svg_icons/Share.svg";
import { ReactComponent as Cancel } from ".//files/svg_icons/Cancel.svg";
import { ReactComponent as Error } from ".//files/svg_icons/Error.svg";
import { ReactComponent as Settings } from ".//files/svg_icons/Settings.svg";
import { ReactComponent as Settings_filled } from ".//files/svg_icons/Settings_filled.svg";
import { ReactComponent as MoneyChangeActive_yes } from ".//files/svg_icons/MoneyChangeActive_yes.svg";
import { ReactComponent as MoneyChangeActive_no } from ".//files/svg_icons/MoneyChangeActive_no.svg";
import { ReactComponent as ShopActive_yes } from ".//files/svg_icons/ShopActive_yes.svg";
import { ReactComponent as ShopActive_no } from ".//files/svg_icons/ShopActive_no.svg";
import { ReactComponent as LiveActive_yes } from ".//files/svg_icons/LiveActive_yes.svg";
import { ReactComponent as LiveActive_no } from ".//files/svg_icons/LiveActive_no.svg";
import { ReactComponent as Euro } from ".//files/svg_icons/Euro.svg";
import { ReactComponent as Ready } from ".//files/svg_icons/Ready.svg";
import { ReactComponent as Processing } from ".//files/svg_icons/Processing.svg";
import { ReactComponent as Copy } from ".//files/svg_icons/Copy.svg";
import { ReactComponent as Accept } from ".//files/svg_icons/Accept.svg";
import { ReactComponent as Decline } from ".//files/svg_icons/Decline.svg";
import { ReactComponent as Money } from ".//files/svg_icons/Money.svg";
import { ReactComponent as Travel } from ".//files/svg_icons/Travel.svg";
import { ReactComponent as Law } from ".//files/svg_icons/Law.svg";
import { ReactComponent as Health } from ".//files/svg_icons/Health.svg";
import { ReactComponent as Living } from ".//files/svg_icons/Living.svg";
import { ReactComponent as Native } from ".//files/svg_icons/Native.svg";
import { ReactComponent as Court } from ".//files/svg_icons/Court.svg";
import { ReactComponent as Attention } from ".//files/svg_icons/Attention.svg";
import { ReactComponent as Location } from ".//files/svg_icons/Location.svg";
import { ReactComponent as Loading } from ".//files/svg_icons/Loading.svg";
import { ReactComponent as Chat_bubble_outline } from ".//files/svg_icons/Chat_bubble_outline.svg";
import { ReactComponent as Mail_outline } from ".//files/svg_icons/Mail_outline.svg";
import { ReactComponent as Wallet } from ".//files/svg_icons/Wallet.svg";
import { ReactComponent as Home } from ".//files/svg_icons/Home.svg";
import { ReactComponent as Frame57 } from ".//files/svg_icons/Frame57.svg";
import { ReactComponent as Frame58 } from ".//files/svg_icons/Frame58.svg";
import { ReactComponent as Arrow2 } from ".//files/svg_icons/Arrow2.svg";
import { ReactComponent as Arrow3 } from ".//files/svg_icons/Arrow3.svg";
import { ReactComponent as Montenegro } from ".//files/svg_icons/Montenegro.svg";

export type IconType =
|"Airplane" 
|"Card_rating" 
|"Card_text" 
|"Menu" 
|"Arrow_back" 
|"Arrow_forward" 
|"Check" 
|"Close" 
|"Circle" 
|"Triangle" 
|"Square" 
|"Pentagon" 
|"Hexagon" 
|"Circle_outline" 
|"Triangle_outline" 
|"Square_outline" 
|"Pentagon_outline" 
|"Hexagon_outline" 
|"Fast_rewind" 
|"Skip_previous" 
|"Play_arrow" 
|"Fast_forward" 
|"Skip_next" 
|"Arrow_right" 
|"Arrow_left" 
|"Arrow_drop_up" 
|"Arrow_drop_down" 
|"More_vert" 
|"Directions_bus" 
|"Directions_transit_filled" 
|"Directions_car" 
|"Searsh" 
|"Local_taxi" 
|"Check_box" 
|"Check_box_filled" 
|"Check_box_outline_blank" 
|"Add" 
|"Bookmark_border" 
|"Bookmark" 
|"Account_circle_filled" 
|"Person_outline" 
|"Chat_bubble" 
|"Light_mode" 
|"Dark_mode" 
|"Delete" 
|"Radio_button_checked" 
|"Radio_button_unchecked" 
|"Star" 
|"Star_border" 
|"Folder" 
|"Navigate_before" 
|"Navigate_next" 
|"File_upload" 
|"File_download" 
|"Folder_fill" 
|"Attach_file" 
|"Today" 
|"Mode_edit" 
|"Share" 
|"Cancel" 
|"Error" 
|"Settings" 
|"Settings_filled" 
|"MoneyChangeActive_yes" 
|"MoneyChangeActive_no" 
|"ShopActive_yes" 
|"ShopActive_no" 
|"LiveActive_yes" 
|"LiveActive_no" 
|"Euro" 
|"Ready" 
|"Processing" 
|"Copy" 
|"Accept" 
|"Decline" 
|"Money" 
|"Travel" 
|"Law" 
|"Health" 
|"Living" 
|"Native" 
|"Court" 
|"Attention" 
|"Location" 
|"Loading" 
|"Chat_bubble_outline" 
|"Mail_outline" 
|"Wallet" 
|"Home" 
|"Frame57" 
|"Frame58" 
|"Arrow2" 
|"Arrow3"
|"Montenegro" ;

  export const iconTypes = new Map([
    ["Airplane", <Airplane key={newGuid()} />],
    ["Card_rating", <Card_rating key={newGuid()} />],
    ["Card_text", <Card_text key={newGuid()} />],
    ["Menu", <Menu key={newGuid()} />],
    ["Arrow_back", <Arrow_back key={newGuid()} />],
    ["Arrow_forward", <Arrow_forward key={newGuid()} />],
    ["Check", <Check key={newGuid()} />],
    ["Close", <Close key={newGuid()} />],
    ["Circle", <Circle key={newGuid()} />],
    ["Triangle", <Triangle key={newGuid()} />],
    ["Square", <Square key={newGuid()} />],
    ["Pentagon", <Pentagon key={newGuid()} />],
    ["Hexagon", <Hexagon key={newGuid()} />],
    ["Circle_outline", <Circle_outline key={newGuid()} />],
    ["Triangle_outline", <Triangle_outline key={newGuid()} />],
    ["Square_outline", <Square_outline key={newGuid()} />],
    ["Pentagon_outline", <Pentagon_outline key={newGuid()} />],
    ["Hexagon_outline", <Hexagon_outline key={newGuid()} />],
    ["Fast_rewind", <Fast_rewind key={newGuid()} />],
    ["Skip_previous", <Skip_previous key={newGuid()} />],
    ["Play_arrow", <Play_arrow key={newGuid()} />],
    ["Fast_forward", <Fast_forward key={newGuid()} />],
    ["Skip_next", <Skip_next key={newGuid()} />],
    ["Arrow_right", <Arrow_right key={newGuid()} />],
    ["Arrow_left", <Arrow_left key={newGuid()} />],
    ["Arrow_drop_up", <Arrow_drop_up key={newGuid()} />],
    ["Arrow_drop_down", <Arrow_drop_down key={newGuid()} />],
    ["More_vert", <More_vert key={newGuid()} />],
    ["Directions_bus", <Directions_bus key={newGuid()} />],
    ["Directions_transit_filled", <Directions_transit_filled key={newGuid()} />],
    ["Directions_car", <Directions_car key={newGuid()} />],
    ["Searsh", <Searsh key={newGuid()} />],
    ["Local_taxi", <Local_taxi key={newGuid()} />],
    ["Check_box", <Check_box key={newGuid()} />],
    ["Check_box_filled", <Check_box_filled key={newGuid()} />],
    ["Check_box_outline_blank", <Check_box_outline_blank key={newGuid()} />],
    ["Add", <Add key={newGuid()} />],
    ["Bookmark_border", <Bookmark_border key={newGuid()} />],
    ["Bookmark", <Bookmark key={newGuid()} />],
    ["Account_circle_filled", <Account_circle_filled key={newGuid()} />],
    ["Person_outline", <Person_outline key={newGuid()} />],
    ["Chat_bubble", <Chat_bubble key={newGuid()} />],
    ["Light_mode", <Light_mode key={newGuid()} />],
    ["Dark_mode", <Dark_mode key={newGuid()} />],
    ["Delete", <Delete key={newGuid()} />],
    ["Radio_button_checked", <Radio_button_checked key={newGuid()} />],
    ["Radio_button_unchecked", <Radio_button_unchecked key={newGuid()} />],
    ["Star", <Star key={newGuid()} />],
    ["Star_border", <Star_border key={newGuid()} />],
    ["Folder", <Folder key={newGuid()} />],
    ["Navigate_before", <Navigate_before key={newGuid()} />],
    ["Navigate_next", <Navigate_next key={newGuid()} />],
    ["File_upload", <File_upload key={newGuid()} />],
    ["File_download", <File_download key={newGuid()} />],
    ["Folder_fill", <Folder_fill key={newGuid()} />],
    ["Attach_file", <Attach_file key={newGuid()} />],
    ["Today", <Today key={newGuid()} />],
    ["Mode_edit", <Mode_edit key={newGuid()} />],
    ["Share", <Share key={newGuid()} />],
    ["Cancel", <Cancel key={newGuid()} />],
    ["Error", <Error key={newGuid()} />],
    ["Settings", <Settings key={newGuid()} />],
    ["Settings_filled", <Settings_filled key={newGuid()} />],
    ["MoneyChangeActive_yes", <MoneyChangeActive_yes key={newGuid()} />],
    ["MoneyChangeActive_no", <MoneyChangeActive_no key={newGuid()} />],
    ["ShopActive_yes", <ShopActive_yes key={newGuid()} />],
    ["ShopActive_no", <ShopActive_no key={newGuid()} />],
    ["LiveActive_yes", <LiveActive_yes key={newGuid()} />],
    ["LiveActive_no", <LiveActive_no key={newGuid()} />],
    ["Euro", <Euro key={newGuid()} />],
    ["Ready", <Ready key={newGuid()} />],
    ["Processing", <Processing key={newGuid()} />],
    ["Copy", <Copy key={newGuid()} />],
    ["Accept", <Accept key={newGuid()} />],
    ["Decline", <Decline key={newGuid()} />],
    ["Money", <Money key={newGuid()} />],
    ["Travel", <Travel key={newGuid()} />],
    ["Law", <Law key={newGuid()} />],
    ["Health", <Health key={newGuid()} />],
    ["Living", <Living key={newGuid()} />],
    ["Native", <Native key={newGuid()} />],
    ["Court", <Court key={newGuid()} />],
    ["Attention", <Attention key={newGuid()} />],
    ["Location", <Location key={newGuid()} />],
    ["Loading", <Loading key={newGuid()} />],
    ["Chat_bubble_outline", <Chat_bubble_outline key={newGuid()} />],
    ["Mail_outline", <Mail_outline key={newGuid()} />],
    ["Wallet", <Wallet key={newGuid()} />],
    ["Home", <Home key={newGuid()} />],
    ["Frame57", <Frame57 key={newGuid()} />],
    ["Frame58", <Frame58 key={newGuid()} />],
    ["Arrow2", <Arrow2 key={newGuid()} />],
    ["Arrow3", <Arrow3 key={newGuid()} />],
    ["Montenegro", <Montenegro key={newGuid()} />],
  ]);

import React from "react";
import {
  Button,
  Icon,
  Text,
} from "../styles/components/ActionButton.styles";

const ActionButton = ({icon,text,action,type,marginRight,disabled,marginIcon,bg}) => {
  return (
      <Button bg={bg} disabled={disabled} marginRight={marginRight} type={type?type:'button'} onClick={action}>
        <Icon marginIcon={marginIcon} className={icon}></Icon>
        <Text>{text}</Text>
      </Button>   
  );
};

export default ActionButton;

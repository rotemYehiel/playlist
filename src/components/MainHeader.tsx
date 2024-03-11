import React from "react";
import { useSelector } from "react-redux";
import {
  fsmSelector,
  listImageSelector,
  listNameSelector,
} from "../store/selectors";
import {
  ListTitle,
  MainHeaderLayout,
  ListImage,
  ListImageWrapper,
} from "../styleComponents/MainHeader";
import STATES from "../constants/states";

const MainHeader = () => {
  const fsm = useSelector(fsmSelector);
  const listName = useSelector(listNameSelector);
  const listImage = useSelector(listImageSelector);

  return (
    <MainHeaderLayout>
      {fsm?.currentState?.name === STATES.SUCCESS && listName && (
        <>
          {listName && <ListTitle>{listName}</ListTitle>}
          {listImage && (
            <ListImageWrapper>
              <ListImage $listImage={listImage} />
            </ListImageWrapper>
          )}
        </>
      )}
    </MainHeaderLayout>
  );
};

export default MainHeader;

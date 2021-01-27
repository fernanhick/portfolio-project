import React from 'react';
import {TopbarCont} from './TopbarElements';
function Topbar({toggleTb}) {
  return (
    <>
      <TopbarCont onClick={toggleTb}>
        {/*    <TopbarWrap>
          <TopbarMenu>
            <TopbarLi>
              <TopbarLink></TopbarLink>
            </TopbarLi>
          </TopbarMenu>
        </TopbarWrap> */}
      </TopbarCont>
    </>
  );
}

export default Topbar;

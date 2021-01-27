import {Divider} from '@material-ui/core';
import React from 'react';
import {
  SidebarCont,
  SidebarWrap,
  SidebarMenu,
  SidebarItem,
  SidebarHeader,
  SidebarLink,
  Toggler,
  TogWrap,
} from './SidebarElements';
import {Close} from '@styled-icons/evaicons-solid/Close';

function Sidebar({isOpen, toggle}) {
  const listItems = ['Profile', 'Dashboard', 'Settings', 'Template'].map(
    (key) => (
      <SidebarItem>
        <SidebarLink>{key}</SidebarLink>
      </SidebarItem>
    )
  );
  return (
    <>
      {' '}
      <SidebarCont isOpen={!isOpen}>
        {' '}
        <SidebarWrap>
          <SidebarMenu>{listItems}</SidebarMenu>{' '}
          <TogWrap>
            <Toggler>
              <Close size='32px' onClick={toggle} />
            </Toggler>
          </TogWrap>
        </SidebarWrap>{' '}
      </SidebarCont>{' '}
    </>
  );
}

export default Sidebar;
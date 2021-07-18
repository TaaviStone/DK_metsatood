import React from "react";
import {
  SidebarConatiner,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarConatiner isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="home">
            KODU
          </SidebarLink>
          <SidebarLink onClick={toggle} to="about">
            TEENUSED
          </SidebarLink>
          <SidebarLink onClick={toggle} to="jobs-pics">
            NÄIDISED
          </SidebarLink>
          <SidebarLink onClick={toggle} to="contact">
            KONTAKT
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarConatiner>
  );
};

export default Sidebar;

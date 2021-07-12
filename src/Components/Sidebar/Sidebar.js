import React from 'react';
import SidebarCreatePostButton from './CreatePostButton';
import SidebarSearchPost from './SearchPost';

const Sidebar = ({ token }) => (
    <div>
    {/* {token && <SidebarCreatePostButton />} */}


    <SidebarCreatePostButton />
    <SidebarSearchPost />


    </div>
);

export default Sidebar;
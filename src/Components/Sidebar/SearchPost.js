import React from 'react';
import './Sidebar.css';

const SidebarSearchPost = () => (
    <form action="/" method="get">
    <label htmlFor="header-search">
        <span className="visually-hidden">Search Posts</span>
    </label>
    <input
        type="text"
        id="header-search"
        placeholder="Search Posts"
        name="s" 
    />
    <button type="submit">Search</button>
</form>
);

export default SidebarSearchPost;
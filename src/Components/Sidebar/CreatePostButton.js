import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
// eslint-disable-next-line
import CreatePost from '../Post/CreatePost';

const SidebarCreatePostButton = () => (
  <Button as={Link} to='/createpost'>Create Post</Button>
);

export default SidebarCreatePostButton;
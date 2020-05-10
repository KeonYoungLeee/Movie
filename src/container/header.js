import React from 'react';
import Link from 'next/link';
import { Menu, Input } from 'antd';

const Header = () => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/">Home</Link></Menu.Item>
        <Menu.Item key="movie"><Link href="/movie">movie</Link></Menu.Item>
        <Menu.Item key="tv"><Link href="/tv">tv</Link></Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item key="about"><Link href="/about">about</Link></Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;

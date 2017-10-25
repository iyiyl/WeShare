import React from 'react';
import { Avatar, Menu, Icon, Input, AutoComplete, Button, Dropdown } from 'antd';
import { Link } from 'dva/router';
import styles from './Nav.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [{
  title: '话题',
  children: [{
    title: 'AntDesign',
    count: 10000,
  }, {
    title: 'AntDesign UI',
    count: 10600,
  }],
}];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >更多
		</a>
    </span>
  );
}

const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className={styles.certain_search_item_count} >{opt.count} 人 关注</span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className={styles.show_all}>
    <a
      href="https://www.baidu.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      查看所有结果
	  </a>
  </Option>,
]);

function Nav({ location }) {
  return (
    <div className={styles.appNav}>
      <div className={styles.innerNav}>
        <Link to="/"><Icon type="github" style={{ "fontSize": 32 }} /></Link>
        <AutoComplete
          className={styles.certain_category_search}
          dropdownClassName={styles.certain_category_search_dropdown}
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ "width": 300 }}
          size="large"
          style={{ "width": 300 }}
          dataSource={options}
          placeholder="搜索您感兴趣的内容···"
          optionLabelProp="value"
        >
          <Input suffix={(
            <Button className={styles.search_btn} size="large" type="primary">
              <Icon type="search" />
            </Button>
          )}
          />
        </AutoComplete>
        <Button type="primary" size="large">提问</Button>
        <Menu
          selectedKeys={[location.pathname]}
          mode="horizontal"
          theme="light"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">test</Link>
          </Menu.Item>
          <Menu.Item key="/topic">
            <Link to="/topic">话题</Link>
          </Menu.Item>

          <SubMenu
            title={<div style={{ "display": "flex", "alignItems": "center", "height": 64 }}><Avatar shape="square" src="http://p1.pstatp.com/thumb/3831000a6a0b7aca0b7d" />{` `}</div>}>

            <Menu.Item key="home">
              <Link to="/people/1"><Icon type="user" />我的主页</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Link to="/logout"><Icon type="logout" />退出</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
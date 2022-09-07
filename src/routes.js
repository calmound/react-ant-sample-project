/**
 * 路由列表
 */
import Index from "./pages/Index";
import Table from './pages/Table';
import Detail from "./pages/Detail";
import Form from "./pages/Form"
import Content from './pages/Content'

const STATIC_ROUTES = [{
    path: '/',
    label: '首页',
    component: <Index />,
},{
    path: 'table',
    label: '表格',
    component: <Table />,
},{
    path: 'detail',
    label: '详情',
    component: <Detail />
},{
    path: 'form',
    label: '表单',
    component: <Form />
},{
    path: 'content',
    label: '内容',
    component: <Content />
}]

export default STATIC_ROUTES
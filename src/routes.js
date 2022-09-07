import About from "./pages/About";
import Index from "./pages/Index";
import Table from './pages/Table';
import Detail from "./pages/Detail";
import Form from "./pages/Form"

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
    path: 'about',
    label: '关于',
    component: <About />
}]

export default STATIC_ROUTES
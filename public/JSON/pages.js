import FrontPage from '../components/frontPage/FrontPage';
import TehtPage from '../components/tehtPage/TehtPage';
import AdminPage from '../components/ozadmin/AdminPage';

const pages = [
    {
        component: FrontPage,
        name: "frontpage",
        path: "/frontpage",
    },
    {
        component: TehtPage,
        name: "tehtpage",
        path: "/tehtpage"
    },
    {
      component: AdminPage,
      name: "adminpage",
      path: "/adminpage"
    }
];

export default pages;

import FrontPage from '../components/frontPage/frontPage';
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

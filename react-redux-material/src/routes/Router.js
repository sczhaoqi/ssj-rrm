import Home from 'components/home/Home';
import Login from 'components/login/Login';
import App from 'components/app/App';
import NotFound from 'components/error/404';
const BasicRoute = [
    { path: "/", component: Home},
    { path: "/login", component: Login},
    { path: "/app", component: App},
    { path: "/404", component: NotFound}
];

export default BasicRoute;
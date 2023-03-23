import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const navigationItems = [
    {
        subHeader: 'Home'
    },
    {
        name: 'Dashboard',
        icon: <HomeIcon/>,
        path: '/'
    },
    {
        name: 'Articles',
        icon: <NewspaperIcon/>,
        path: '/news'
    },
    {
        subHeader:'Account'
    },
    {
        name: 'Settings',
        icon: <SettingsIcon/>,
        path: '/account-settings'
    },
    {
        name: 'Login',
        icon: <LoginIcon/>,
        path: '/login'
    },
    {
        name: 'Register',
        icon: <PersonAddIcon/>,
        path: '/register'
    }
    
];

export default navigationItems;
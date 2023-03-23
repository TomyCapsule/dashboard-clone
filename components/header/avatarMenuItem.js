import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import EuroIcon from '@mui/icons-material/Euro';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';


const avatarMenuItem = [
    {
        name: 'Profile',
        icon: <PersonIcon fontSize="small" />
    },
    {
        name: 'Inbox',
        icon: <EmailIcon fontSize="small" />
    },
    {
        name: 'Chat',
        icon: <ChatIcon fontSize="small" />
    },
    {
        sectionDivider: <Divider/>
    },
    {
        name: 'Settings',
        icon: <SettingsIcon fontSize="small" />
    },
    {
        name: 'Pricing',
        icon: <EuroIcon fontSize="small" />
    },
    {
        name: 'FAQ',
        icon: <HelpOutlineIcon fontSize="small" />
    },
    {
        sectionDivider: <Divider/>
    },
    {
        name: 'Logout',
        icon: <Logout fontSize="small" />
    },
]

export default avatarMenuItem;
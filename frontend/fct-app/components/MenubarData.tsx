import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskIcon from '@mui/icons-material/Task';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

export const MenubarData = [
    {
        title:"ホーム",
        icon:<HomeIcon/>,
        link:'/main',
    },
    {
        title:"マイ",
        icon:<PersonIcon/>,
        link:'/mypage/home',
    },
    {
        title:"チーム",
        icon:<GroupIcon/>,
        link:'/teampage/teamhome'
    },
    {
        title:"有給申請",
        icon:<EmailIcon/>,
        link:'/paid'
    },
    {
        title:"配置作業",
        icon:<TableRestaurantIcon/>,
        link:'/arrangement'
    }
]



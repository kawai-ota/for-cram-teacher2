import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

export const MenubarData = [
    {
        title:"ホーム",
        icon:<HomeIcon/>,
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



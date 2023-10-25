"use client"
import { BarChart, Compass, Layout, List } from 'lucide-react'
import React from 'react'
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    },



]

const TeacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics"
    },



]




const SidebarRoutes = () => {
    const pathName = usePathname()


    const isTeacherPage = pathName?.includes("/teacher")

    const routes = isTeacherPage ? TeacherRoutes : guestRoutes

    return (
        <div className='flex flex-col w-full'>
            {routes.map((route, index) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}

export default SidebarRoutes
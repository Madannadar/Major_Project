import React, { useState } from 'react'
import {
    Bell,
    ChevronDown,
    Globe,
    Home,
    FileText,
    Gavel,
    Shield,
    HelpCircle,
    Menu,
    X,
    TrendingUp,
    DollarSign,
    Users,
    Activity,
} from 'lucide-react'
import { ActiveTenders, MyBids, Contracts, Support } from './VendorPages.tsx'
export interface VendorDashboardProps {
    userName?: string
    userAvatar?: string
    'data-id'?: string
}
export function VendorDashboard({
    userName = 'John Doe',
    userAvatar,
    'data-id': dataId,
}: VendorDashboardProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState('home')
    const [notifications] = useState([
        {
            id: 1,
            message: 'New tender published: Road Construction Project',
            time: '2 hours ago',
        },
        {
            id: 2,
            message: 'Bid deadline approaching: IT Equipment Procurement',
            time: '4 hours ago',
        },
        {
            id: 3,
            message: 'Contract awarded: Healthcare Supplies',
            time: '1 day ago',
        },
    ])
    const menuItems = [
        {
            id: 'home',
            icon: Home,
            label: 'Home',
        },
        {
            id: 'tenders',
            icon: FileText,
            label: 'Active Tenders',
        },
        {
            id: 'bids',
            icon: Gavel,
            label: 'My Bids',
        },
        {
            id: 'contracts',
            icon: FileText,
            label: 'Contracts',
        },
        {
            id: 'support',
            icon: HelpCircle,
            label: 'Support',
        },
    ]
    const stats = [
        {
            title: 'Active Tenders',
            value: '24',
            change: '+12%',
            icon: FileText,
            trend: 'up' as const,
        },
        {
            title: 'Submitted Bids',
            value: '8',
            change: '+3',
            icon: Gavel,
            trend: 'up' as const,
        },
        {
            title: 'Won Contracts',
            value: '3',
            change: '+1',
            icon: TrendingUp,
            trend: 'up' as const,
        },
        {
            title: 'Total Revenue',
            value: '$2.4M',
            change: '+18%',
            icon: DollarSign,
            trend: 'up' as const,
        },
    ]
    const StatCard = ({ stat }: { stat: any }) => (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                    {stat.change && (
                        <p
                            className={`text-sm flex items-center mt-1 ${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}
                        >
                            {stat.change}
                        </p>
                    )}
                </div>
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-gray-700" />
                </div>
            </div>
        </div>
    )
    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'tenders':
                return <ActiveTenders />
            case 'bids':
                return <MyBids />
            case 'contracts':
                return <Contracts />
            case 'support':
                return <Support />
            default:
                return (
                    <div
                        className="p-6"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-black mb-2">
                                Vendor Dashboard
                            </h1>
                            <p className="text-gray-600">
                                Welcome back! Here's what's happening with your procurement
                                activities.
                            </p>
                        </div>
                        {/* Statistics Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <StatCard key={index} stat={stat} />
                            ))}
                        </div>
                        {/* Recent Activity */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-black mb-4 flex items-center">
                                <Bell className="h-5 w-5 mr-2" />
                                Recent Notifications
                            </h3>
                            <div className="space-y-4">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className="flex items-start space-x-3 p-3 rounded-md border border-gray-100 hover:bg-gray-50"
                                    >
                                        <div className="h-2 w-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-900">
                                                {notification.message}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {notification.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
        }
    }
    return (
        <div
            data-id={dataId}
            className="min-h-screen bg-gray-50"
            style={{
                fontFamily: 'Poppins, sans-serif',
            }}
        >
            {/* Top Navigation */}
            <nav className="bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-black">Procurewatch</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-black">
                            <option>EN</option>
                            <option>ES</option>
                            <option>FR</option>
                        </select>
                        <div className="relative">
                            <button className="p-2 rounded-md hover:bg-gray-100 relative">
                                <Bell className="h-5 w-5 text-gray-700" />
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                                    {notifications.length}
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-md px-2 py-1">
                            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-700">
                                    {userName
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')}
                                </span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 hidden sm:block">
                                {userName}
                            </span>
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex">
                {/* Sidebar */}
                <aside
                    className={`bg-white border-r border-gray-200 w-64 min-h-screen transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static z-30`}
                >
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-6 lg:hidden">
                            <span className="text-lg font-semibold text-black">Menu</span>
                            <button onClick={() => setSidebarOpen(false)}>
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <nav className="space-y-2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id)
                                        setSidebarOpen(false)
                                    }}
                                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${currentPage === item.id ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>
                {/* Main Content */}
                <main className="flex-1">{renderCurrentPage()}</main>
            </div>
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    )
}

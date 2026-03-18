'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Map, BookOpen, MessageSquare } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    { label: 'Dashboard', href: '/forum/dashboard', icon: <LayoutDashboard className="size-5" /> },
    { label: 'Learning Path', href: '/forum/learning-path', icon: <Map className="size-5" /> },
    { label: 'Courses', href: '/forum/courses', icon: <BookOpen className="size-5" /> },
    { label: 'Forum', href: '/forum', icon: <MessageSquare className="size-5" /> },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white border-r h-full flex flex-col">
            <nav className="flex-1 p-6 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === item.href
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}

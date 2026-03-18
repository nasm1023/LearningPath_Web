
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForumHeaderProps {
    title?: string;
    onSortChange?: () => void;
    onFilterChange?: () => void;
}

export function ForumHeader({ title = 'Forum', onSortChange, onFilterChange }: ForumHeaderProps) {
    return (
        <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-5 h-5"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span className="text-blue-600 font-semibold text-lg">LearningPath</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search m (tên diễn đàn)"
                        className="pl-10 bg-gray-50 border-gray-200"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                    <Bell className="w-5 h-5 text-gray-600" />
                </button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-4 h-4 mr-2"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    AI Assistant
                </Button>
                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                    <User className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600"
                    >
                        <circle cx="12" cy="12" r="1" fill="currentColor" />
                        <circle cx="12" cy="5" r="1" fill="currentColor" />
                        <circle cx="12" cy="19" r="1" fill="currentColor" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

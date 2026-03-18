'use client';
import { Calendar, Globe, Lock } from 'lucide-react';
import { ForumDetails as ForumInfoType } from '@/types/forum';
import { User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForumInfoProps {
    info: ForumInfoType;
}
interface ForumHeaderProps {
    title: string;
    onSortChange?: (value: string) => void;
    onFilterChange?: (value: string) => void;
}

export function ForumHeader({ title, onSortChange, onFilterChange }: ForumHeaderProps) {
    return (
        <div className="bg-white rounded-lg p-6 mb-6">
            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>

            {/* Sort and Filter */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 text-sm"
                        onClick={() => onSortChange?.('date')}
                    >
                        <User className="w-4 h-4" />
                        <ChevronDown className="w-3 h-3" />
                    </Button>
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-sm"
                    onClick={() => onFilterChange?.('all')}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" />
                        <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
                        <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" />
                    </svg>
                    <ChevronDown className="w-3 h-3" />
                </Button>
            </div>
        </div>
    );
}

export function ForumInfo({ info }: ForumInfoProps) {
    return (
        <div className="bg-white rounded-lg p-6 mb-4">
            <h2 className="text-lg font-bold mb-4">{info.name}</h2>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
                {info.description}
            </p>

            <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-600">Created {info.createdAt}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    {info.privacy === 'Public' ? (
                        <>
                            <Globe className="w-4 h-4 text-gray-600" />
                            <span className="text-gray-600">Public</span>
                        </>
                    ) : (
                        <>
                            <Lock className="w-4 h-4 text-gray  -600" />
                            <span className="text-gray-600">Private</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

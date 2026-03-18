import { User } from 'lucide-react';
import { Author } from '@/types/forum';

interface ForumModeratorsProps {
    moderators: Author[];
}

export function ForumModerators({ moderators }: ForumModeratorsProps) {
    return (
        <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">MODERATORS</h3>

            <div className="space-y-3">
                {moderators.map((moderator) => (
                    <div key={moderator.id} className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3" />
                        </div>
                        <span className="text-sm">
                            {moderator.name}
                            {moderator.role && ` (${moderator.role})`}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

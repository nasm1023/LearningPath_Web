import { User } from 'lucide-react';
import { ForumPost as ForumPostType } from '@/types/forum';

interface ForumPostProps {
    post: ForumPostType;
}

export function ForumPost({ post }: ForumPostProps) {
    return (
        <article className="bg-white rounded-lg p-6 mb-4 hover:shadow-sm transition-shadow">
            {/* Author Info */}
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{post.author.name}</span>
                    <span className="text-sm text-gray-500">{post.createdAt}</span>
                </div>
            </div>

            {/* Post Title */}
            <h2 className="text-lg font-semibold mb-3">{post.title}</h2>

            {/* Post Content */}
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
            </div>
        </article>
    );
}

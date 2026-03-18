"use client";

import { useEffect, useState } from "react";
import { ForumPost } from "@/components/layout/forum/ForumPost";
import { ForumInfo } from "@/components/layout/forum/ForumInfor";
import { ForumRules } from "@/components/layout/forum/ForumRules";
import { ForumModerators } from "@/components/layout/forum/ForumModerators";
import { getForumPosts, getForumDetails } from "@/app/api/forum/route";
import type { ForumPost as ForumPostType, ForumDetails } from "@/types/forum";

export default function ForumPage() {
    const [posts, setPosts] = useState<ForumPostType[]>([]);
    const [forumInfo, setForumInfo] = useState<ForumDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadForumData = async () => {
            try {
                const [postsData, infoData] = await Promise.all([
                    getForumPosts(),
                    getForumDetails(),
                ]);
                setPosts(postsData);
                setForumInfo(infoData);
            } catch (error) {
                console.error("Error loading forum data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadForumData();
    }, []);

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center">
                <div className="text-gray-500">Loading...</div>
            </div>
        );
    }

    return (
        <div className="h-full flex">
            {/* Main Content */}
            <div className="flex-1 p-8 overflow-auto">
                <div className="space-y-4">
                    {posts.map((post) => (
                        <ForumPost key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* Right Sidebar */}
            {forumInfo && (
                <aside className="w-80 p-8 overflow-auto border-l bg-white">
                    <ForumInfo info={forumInfo} />
                    <ForumRules rules={forumInfo.rules} />
                    <ForumModerators moderators={forumInfo.moderators} />
                </aside>
            )}
        </div>
    );
}

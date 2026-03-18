export interface Author {
    id: string;
    name: string;
    avatarUrl?: string;
    role?: 'user' | 'admin' | 'moderator';
}

export interface ForumPost {
    id: string;
    author: Author;
    createdAt: string;
    title: string;
    content: string;
}

export interface ForumDetails {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    privacy: 'Public' | 'Private';
    rules: string[];
    moderators: Author[];
}
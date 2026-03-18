import { ForumPost, ForumDetails } from '@/types/forum';
// Fetch Mock data Forum API
export async function getForumPosts(): Promise<ForumPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [
        {
            id: '1',
            author: { id: 'u1', name: 'Nam Lý' },
            createdAt: '23 min. ago',
            title: 'Tuổi 23: Chọn công việc ổn định ở quê hay lên thành phố đầu tư cho tương lai',
            content: 'Mình năm nay 23 tuổi, vừa tốt nghiệp ngành Luật kinh tế được khoảng nửa năm. Thời gian này mình đang đứng trước một lựa chọn khá khó khăn: nên tìm một công việc ổn định để đi làm lâu dài, hay tiếp tục đi học để đầu tư cho tương lai...\n\nSau khi ra trường một thời gian và đi chạy shipper, nhờ các mối quan hệ của gia đình nên mình được giới thiệu vào làm ở một công ty tại quê. Mức lương khoảng 10 triệu/tháng...',
        },
        {
            id: '2',
            author: { id: 'u1', name: 'Nam Lý' },
            createdAt: '23 min. ago',
            title: 'Tuổi 23: Chọn công việc ổn định ở quê hay lên thành phố đầu tư cho tương lai',
            content: 'Mình năm nay 23 tuổi, vừa tốt nghiệp ngành Luật kinh tế được khoảng nửa năm. Thời gian này mình đang đứng trước một lựa chọn khá khó khăn: nên tìm một công việc ổn định để đi làm lâu dài, hay tiếp tục đi học để đầu tư cho tương lai...\n\nSau khi ra trường một thời gian và đi chạy shipper, nhờ các mối quan hệ của gia đình nên mình được giới thiệu vào làm ở một công ty tại quê. Mức lương khoảng 10 triệu/tháng...',
        },
    ];
}

export async function getForumDetails(): Promise<ForumDetails> {
    return {
        id: 'f1',
        name: 'Academic Process',
        description: 'Lorem ipsum dolor sit amet consectetur. Euismod convallis amet a id nec. Lacus dui maecenas et dignissim non sed ac sed. Quis viverra fermentum quisque sit blandit sit sed dui porta. Cras vitae sit faucibus consequat lacus.',
        createdAt: 'Nov 30th, 2025',
        privacy: 'Public',
        rules: [
            'Cấm văng tục, chửi thề, ngôn ngữ không phù hợp.',
            'Cấm chia sẻ các vấn đề nhạy cảm',
            'Cấm seeding'
        ],
        moderators: [
            { id: 'u1', name: 'Nam Lý', role: 'admin' }
        ]
    };
}
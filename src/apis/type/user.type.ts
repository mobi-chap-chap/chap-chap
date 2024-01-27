export type User = {
    userId: string;
    password: string;
    data: {
        memberId: number;
        nickName: string;
        profileImage: File;
        scrap?: boolean;
    };
    status: number;
};

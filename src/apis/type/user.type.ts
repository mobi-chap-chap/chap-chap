export type User = {
    nickname: string;
    userId: string;
    password: string;
    checkPw: string;
    data: {
        memberId: number;
        profileImage: File;
        scrap?: boolean;
    };
    status: number;
};



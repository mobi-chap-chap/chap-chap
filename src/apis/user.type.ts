export type User = {
    userId: number;
    password:string;
    data : {
        memberId: number;
        nickName: string;
        profileImage: File;
        scrap?: boolean;
    }
 };
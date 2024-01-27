// 정규 표현식을 담는 곳

export const REGEXP = {
    userId: /^[a-z]+[a-z0-9]{4,10}$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
};

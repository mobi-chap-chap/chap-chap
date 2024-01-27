import { z } from 'zod';
import { REGEXP } from './regexp';

export const SignUpSchema = z
    .object({
        nickname: z
            .string()
            .nonempty('별명을 입력해주세요.')
            .min(2, { message: '두 글자 이상 여덟 글자 이하로 입력해주세요' })
            .max(8, { message: '두 글자 이상 여덟 글자 이하로 입력해주세요' }),
        userId: z
            .string()
            .nonempty('아이디를 입력해주세요.')
            .regex(REGEXP.userId, { message: '4자리 이상 10자리 이하의 영어 또는 숫자로 입력해주세요' }),
        password: z
            .string()
            .nonempty('비밀번호를 입력해주세요.')
            .regex(REGEXP.password, { message: '8자리 이상 16자리 이하의 영문자와 숫자로 입력해주세요' }),
        checkPw: z.string(),
    })
    .refine((data) => data.password === data.checkPw, {
        path: ['checkPw'],
        message: '비밀번호가 일치하지 않습니다',
    });

export type SignUpType = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
    userId: z.string().regex(REGEXP.userId, { message: '4자리 이상 10자리 이하의 영어 또는 숫자로 입력해주세요' }),
    password: z.string().regex(REGEXP.password, { message: '8자리 이상 16자리 이하의 영문자와 숫자로 입력해주세요' }),
});

export type SignInType = z.infer<typeof SignInSchema>;

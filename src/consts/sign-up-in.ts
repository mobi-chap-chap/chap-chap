export const SignUpIn = [
    // SignUp
    [
        {
            label: '별명',
            id: 'nickname',
            type: 'text',
        },
        {
            label: '아이디',
            id: 'userId',
            type: 'text',
        },
        {
            label: '비밀번호',
            id: 'password',
            type: 'password',
        },
        {
            label: '비밀번호 확인',
            id: 'checkPw',
            type: 'password',
        },
    ],
    [
        // SignIn
        {
            label: '아이디',
            id: 'userId',
            type: 'text',
        },
        {
            label: '비밀번호',
            id: 'password',
            type: 'password',
        },
    ],
] as const;


/**
 * as const를 사용하면 변수의 타입이 해당 값으로 고정됨
 * 좀 더 정교한 타입 유추가 가능
 * 이는 주로 상수나 불변 데이터를 정의할 때 사용되며, 
 * 예상치 못한 값 변경을 방지하고 타입 정의를 높일 수 있습니다.
 */
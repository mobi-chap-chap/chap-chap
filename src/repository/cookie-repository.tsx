/**
 * 쿠키를 보관하는 cookieStorage입니다
 * accessToken 및 refreshToken을 보관합니다.
*/
export const COOKIE_TOKEN = 'cookie_token';

const cookieStorage = {
    /**
     * @param key 쿠키의 이름이 되는 키
     * @param value 쿠키에 넣을 값
     * @param maxAgeInMinutes 쿠키의 지속 기간
     * */
    setCookie: (key: string, value: string, maxAgeInMinutes: number) => {
      const todayDate = new Date();
      todayDate.setTime(todayDate.getTime() + maxAgeInMinutes * 1000 * 60);
      document.cookie = `${key}=${encodeURIComponent(
        value,
      )}; path=/; expires=${todayDate.toUTCString()};`;
    },
  
    /**
     * @function : getCookie는 지정된 키에 해당하는 쿠키 값을 가져오는 함수
     * @param key : 함수를 사용해 해당 키에 대한 쿠키 값을 가져옴. 값 존재 시 true를, 그렇지 않으면 false를 반환
     * 
    */
    getCookie: (key: string) => {
      const regex = new RegExp(`${key}=([^;]*)`);
      const match = regex.exec(document.cookie);
      return match ? decodeURIComponent(match[1]) : null;
    },
  
    /**
     * @function : hasCookie: 지정된 키에 해당하는 쿠키가 있는지 확인하는 함수
     * @param key: 확인할 쿠키의 이름이 되는 키
     * @returns !!을 통해 값이 존재하면 true를, 그렇지 않으면 false를 반환하도
     */
    hasCookie: (key: string) => {
      return !!cookieStorage.getCookie(key);
    },
  
    /**
     * @function : deleteCookie는 지정된 이름의 쿠키를 삭제하는 함수
     * @param name : 삭제할 쿠키의 이름
     * @desc document.cookie를 사용하여 해당 이름의 쿠키를 삭제하는데 이때 만료 시간을 현재 시간 이전으로 설정하여 브라우저에게 해당 쿠키를 제거하도록 지시
    */
    deleteCookie: (name: string) => {
      document.cookie =
        name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    },
  };
  
  export default cookieStorage;
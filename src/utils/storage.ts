import Cookies from 'js-cookie';

export default {
    setItem: (name: string, value: string, options: any = {}) => {
        Cookies.set(name, value);
    },
    getItem: (name: string): object => {
        const value = Cookies.get(name) || '{}';
        return JSON.parse(value) ;
    },
    removeItem: (name: string) => {
        Cookies.remove(name);
    }
};




export default interface Users {
    page: number;
    per_page: number;
    total: number;
    total_pages: 2;
    data: User[];
}

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

import { Employee } from "./Employee";

export interface Duty {
    id: string;
    date: Date;
    cost: number;
    employee: Employee;
}
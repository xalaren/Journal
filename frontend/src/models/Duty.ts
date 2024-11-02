import { Employee } from "./Employee";

export interface Duty {
    id: number;
    date: Date;
    cost: number;
    employee: Employee;
}
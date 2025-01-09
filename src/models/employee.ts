export interface Employee {
    employeeId: string;
    name: string;
    role: string;
    startDate: string;
    endDate?: string;
}


export enum Roles {
    PD = 'Product Designer',
    FD = 'Flutter Developer',
    QT = 'QA Tester',
    PO = 'Product Owner'
}
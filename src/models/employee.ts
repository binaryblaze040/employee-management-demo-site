export interface Employee {
    employeeId: string;
    name: string;
    role: Roles;
    startDate: string;
    endDate?: string;
}


export enum Roles {
    PD = 'Product Designer',
    FD = 'Flutter Developer',
    QT = 'QA Tester',
    PO = 'Product Owner'
}
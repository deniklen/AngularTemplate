export interface Role {
    roleType: string;
    id: string;
    isNewEntity: boolean;
}

export interface User {
    firstName: string;
    lastName: string;
    fullName: string;
    emailAddress: string;
    passwordHash: string;
    active: boolean;
    activated: boolean;
    registeredOn: Date;
    lastLoggedOn?: any;
    roles: Role[];
    id: string;
    isNewEntity: boolean;
}

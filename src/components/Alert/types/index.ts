export enum typeEnumAlert {
    DEFAULT,
    ERROR,
    SUCCESS
};

export interface IAlert {
    type: typeEnumAlert,
    title: string,
    body?: string,
    wait: number,
};
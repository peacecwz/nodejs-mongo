import 'reflect-metadata';

export interface IConfigSet {
    DEBUG_LOGGING_ENABLED: boolean;
    MONGODB_CONNECTION_STRING: string;
}

const DEV: IConfigSet = {
    DEBUG_LOGGING_ENABLED: true,
    MONGODB_CONNECTION_STRING: ""
};

export {
    DEV
};

export interface IApiError {
    success: boolean;
    error: string
}

export interface ISelectOption<T = string> {
    label: string;
    value: T
}
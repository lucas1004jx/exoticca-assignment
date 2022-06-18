export type PickOptional<T, K extends keyof T> = Partial<Pick<T, K>>

export interface baseComponents  {
    children: React.ReactNode
}


/**
 * 删除数组中每一项对象中的 属性
 */
export type RemoveItemFromArray<T, U> = T extends Array<infer R> ? U extends keyof R ? Omit<R, U>[] : T: T;

/**
 * 操作 枚举
 */
export type Operate = 'delete' | 'edit' | 'add'
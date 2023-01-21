type Join<K, P> = K extends string | number
    ? 0 extends 1 & P
        ? never
        : P extends string | number
        ? `${K}${'' extends P ? '' : '.'}${P}`
        : never
    : never

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]

/**
 * Union type of all given deep nested pathes. Stops at primitives and Dates and jumps over arrays.
 *
 * @example
 * ```
 * type TheType = {
 *     a: {
 *         aa: {
 *             aa1: string
 *         }
 *         b: Array<{ b1: string }>
 *     }
 * }
 *
 * type TheTypePath = Path<TheType>;
 * => 'a' | 'a.aa' | 'a.aa.aa1' | 'a.b' | 'a.b.b1'
 * ```
 */
type Primitive = null | undefined | string | number | boolean | symbol | bigint | String | Date
type DeepSubKeys<T, K extends string> = K extends keyof T ? `${K}.${Path<T[K]>}` : never
export type Path<T> = object extends T
    ? never
    : T extends Primitive
    ? never
    : T extends readonly unknown[]
    ? Path<T[number]>
    : T extends object
    ? (keyof T & string) | DeepSubKeys<T, keyof T & string>
    : never

/**
 * Generic type that resolves the type of a deep nested field
 *
 * @example
 * ```
 * export type SingleFieldUpdate = <P extends Path<TheObjectsType>>(
 *         object: TheObjectsType,
 *         attribute: P,
 *         value: TypeOfPath<Measure, P>
 *     ) => void;
 * ```
 */
export type TypeOfPath<T, K, D extends number = 10> = [D] extends [never]
    ? never // stop if to deeply nested
    : K extends keyof T
    ? T[K]
    : K extends `${infer K1}.${infer rest}`
    ? K1 extends keyof T
        ? TypeOfPath<T[K1], rest, Prev[D]>
        : never
    : never

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>
}

export type RecursivePartialL2<T> = {
    [attr in keyof T]: T[attr] extends object ? RecursivePartial<T[attr]> : T[attr]
}

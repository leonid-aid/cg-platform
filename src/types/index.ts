import { FC, SVGProps } from 'react'

export type PickFromObject<T> = T[keyof T]
export type SVG = FC<SVGProps<SVGSVGElement>>
export type OnlyOne<T, U extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, U>
> &
    {
        [key in U]-?: Required<Pick<T, key>> &
            Partial<Record<Exclude<U, key>, undefined>>
    }[U]

export type Join<K, P> = K extends string | number
    ? P extends string | number
        ? `${K}${'' extends P ? '' : '.'}${P}`
        : never
    : never

export type Paths<T, D extends number = 10> = [D] extends [never]
    ? never
    : T extends object
    ? {
          [K in keyof T]-?: K extends string | number
              ? `${K}` | Join<K, Paths<T[K]>>
              : never
      }[keyof T]
    : ''

export type Leaves<T, D extends number = 10> = [D] extends [never]
    ? never
    : T extends object
    ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
    : ''

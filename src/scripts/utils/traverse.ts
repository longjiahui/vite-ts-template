/**
 * @file 树遍历函数
 */

/**
 * @method              树遍历
 * @param datas         树数据
 * @param childrenKey   子节点的key值
 * @param func          遍历函数，返回非undefined值会提前返回该值
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function traverse<T = any, R = any>(
    datas: T[],
    childrenKey: keyof T,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    func: (d: T, i: number, ds: T[], p: T | undefined, layer: number) => any,
    parent?: T,
    layer = 0,
): R | void {
    if (func instanceof Function) {
        for (let i = 0; i < datas.length; ++i) {
            const d = datas[i]
            let ret = func(d, i, datas, parent, layer)
            if (ret !== undefined) {
                return ret
            } else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if ((d[childrenKey] as any) instanceof Array) {
                    ret = traverse(
                        d[childrenKey] as T[],
                        childrenKey,
                        func,
                        d,
                        layer + 1,
                    )
                    if (ret !== undefined) {
                        return ret
                    }
                }
            }
        }
    }
}

/**
 * @method              树遍历map
 * @param datas         树数据
 * @param childrenKey   子节点的key值
 * @param func          遍历函数，返回值会push到最后的返回值
 * @param filter        filter函数，如何有值，根据返回boolean判断是否过滤该此遍历函数返回
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function traverseMap<R = any, T = any>(
    datas: T[],
    childrenKey: keyof T,
    func: (
        d: T,
        i: number,
        ds: T[],
        p: T | undefined,
        layer: number,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter?: (
        d: T,
        i: number,
        ds: T[],
        p: T | undefined,
        layer: number,
    ) => boolean,
): R[] {
    const mapData: R[] = []
    traverse<T>(datas, childrenKey, (d, i, ds, p, layer) => {
        const nextLayer = (layer || 0) + 1
        const ret = func(d, i, ds, p, nextLayer)
        if (filter instanceof Function) {
            const isResolve = filter(d, i, ds, p, nextLayer)
            if (isResolve) {
                mapData.push(ret)
            }
        } else {
            mapData.push(ret)
        }
    })
    return mapData
}

/**
 * @method              异步树遍历
 * @param datas         树数据
 * @param childrenKey   子节点的key值
 * @param func          遍历函数，返回非undefined值会提前返回该值
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function traverseAsync<T = any>(
    datas: T[],
    childrenKey: keyof T,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    func: (d: T, i: number, ds: T[], p: T | undefined, layer: number) => any,
    parent?: T,
    layer = 0,
) {
    if (func instanceof Function) {
        for (let i = 0; i < datas.length; ++i) {
            const d = datas[i]
            let ret = await func(d, i, datas, parent, layer)
            if (ret !== undefined) {
                return ret
            } else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if ((d[childrenKey] as any) instanceof Array) {
                    ret = await traverse(
                        d[childrenKey] as T[],
                        childrenKey,
                        func,
                        d,
                        layer + 1,
                    )
                    if (ret !== undefined) {
                        return ret
                    }
                }
            }
        }
    }
}

/**
 * @method              异步树遍历map
 * @param datas         树数据
 * @param childrenKey   子节点的key值
 * @param func          遍历函数，返回值会push到最后的返回值
 * @param filter        filter函数，如何有值，根据返回boolean判断是否过滤该此遍历函数返回
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function traverseMapAsync<T = any>(
    datas: T[],
    childrenKey: keyof T,
    func: (
        d: T,
        i: number,
        ds: T[],
        p: T | undefined,
        layer: number,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter?: (
        d: T,
        i: number,
        ds: T[],
        p: T | undefined,
        layer: number,
    ) => boolean,
): Promise<T[]> {
    const mapData: T[] = []
    await traverse<T>(datas, childrenKey, async (d, i, ds, p, layer) => {
        const nextLayer = (layer || 0) + 1
        let ret = func(d, i, ds, p, nextLayer)
        if (ret instanceof Promise) {
            ret = await ret
        }
        if (filter instanceof Function) {
            const isResolve = filter(d, i, ds, p, nextLayer)
            if (isResolve) {
                mapData.push(ret)
            }
        } else {
            mapData.push(ret)
        }
    })
    return mapData
}

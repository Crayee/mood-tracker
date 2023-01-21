import { EventHandler, SyntheticEvent } from 'react'

export const stopPropagation = <
    E extends SyntheticEvent<any> = SyntheticEvent<any>,
    T extends EventHandler<E> = EventHandler<any>
>(
    eventHandler: T
): T =>
    ((event: any) => {
        event.preventDefault()
        event.stopPropagation()
        eventHandler(event)
    }) as any

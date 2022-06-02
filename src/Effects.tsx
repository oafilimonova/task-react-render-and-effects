import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [getmess, setmess] = useState(-1);
    const callback = (message: number) => {
        return setmess(message);
    };
    useEffect(() => {
        subscribe(props.sourceId, callback);
        setmess(-1);
        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {getmess}
        </div>
    );
}

import { useDebugValue, useState } from "react";

export function useDebugTestHook() {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(count + 1);

    useDebugValue(count, (count) => `Count is ${count}`);

    return { count, increment };
}
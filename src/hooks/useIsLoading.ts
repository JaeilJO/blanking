import { useEffect, useState } from 'react';

function useIsLoading(loadingMessage: string, loading: (message: string) => void) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            loading(`${loadingMessage}`);
        }
    }, [isLoading]);

    return { isLoading, setIsLoading };
}

export default useIsLoading;

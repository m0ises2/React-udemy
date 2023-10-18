import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas de useFetchGifs hook', () => {
    test('debe regresar el estado inicial', () => { 
        const { result: { current :{ images, isLoading } } } = renderHook(() => useFetchGifs('Dragon Ball'));

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    });

    test('debe retornar un arreglo de imagenes e isLoading en false', async () => { 
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const { current: { images, isLoading } } = result;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    })
});

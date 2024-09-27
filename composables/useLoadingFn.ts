import type { AnyFn } from "@vueuse/core";

/**
 * This function creates a reactive loading state for a function. Before the
 * function is called, the loading state is set to true, and after the function
 * is called, the loading state is set to false.
 *
 * @param cb callback function
 * @returns the loading state and the wrapped function
 */
export function useLoadingFn<CallbackFn extends AnyFn>(cb: CallbackFn): [Ref<boolean>, (...args: Parameters<CallbackFn>) => Promise<ReturnType<CallbackFn>>] {
  const loading = ref(false);
  const fn = async (...args: Parameters<CallbackFn>) => {
    let res: ReturnType<CallbackFn>;
    try {
      loading.value = true;
      // eslint-disable-next-line n/no-callback-literal
      res = await cb(...args);
    } finally {
      loading.value = false;
    }
    return res;
  };
  return [loading, fn];
}

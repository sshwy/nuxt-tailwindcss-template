type DarkModeState = {
  mode: 'auto' | 'light' | 'dark'
}
export const useDarkMode = () => {
  const state = useState<DarkModeState>('use_dark_mode_state', () => {
    return {
      mode: 'auto',
    }
  })
  const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

  const updateDOM = (st: DarkModeState) => {
    // console.log('updateDOM')
    if (st.mode === 'auto' && darkQuery().matches || st.mode === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }

  const modeModel = computed({
    get: () => state.value.mode,
    set: val => {
      if (val === 'light' || val === 'dark' || val === 'auto') {
        state.value.mode = val as any
        updateDOM(state.value)
      }
      // otherwise ignore the value
    }
  })

  // client side init
  const initFlag = useState('use_dark_mode_init_flag', () => false)
  if (import.meta.client && !initFlag.value) {
    // console.debug('client side init')
    darkQuery().addEventListener("change", () => updateDOM(state.value))
    updateDOM({ mode: 'auto' })
    initFlag.value = true
  }

  return modeModel
}
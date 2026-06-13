import { ref, onMounted } from 'vue'

const theme = ref('light')

function applyThemeClass(next) {
  const root = document.documentElement
  if (next === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') {
      theme.value = saved
      applyThemeClass(theme.value)
    } else {
      // Default to light mode if no preference is saved
      theme.value = 'light'
      applyThemeClass('light')
    }
  })

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
    applyThemeClass(theme.value)
  }

  return { theme, toggleTheme }
}



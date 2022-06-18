import { useMediaQuery } from 'react-responsive'

export const useScreen = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1800 })
  const isMediumScreen = useMediaQuery({ minWidth: 1400, maxWidth: 1799 })
  const isSmallScreen = useMediaQuery({ minWidth: 1000, maxWidth: 1399 })
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 999 })
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 699 })

  return {
    isBigScreen,
    isMediumScreen,
    isSmallScreen,
    isTablet,
    isMobile
  }
}

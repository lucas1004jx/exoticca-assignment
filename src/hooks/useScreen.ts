import { useMediaQuery } from 'react-responsive'

export const useScreen = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1800px)' })
  const isMediumScreen = useMediaQuery({ query: '(min-width: 1400px)' })
  const isSmallScreen = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 700px)' })
  const isMobile = useMediaQuery({ query: '(min-width: 0px)' })

  return {
    isBigScreen,
    isMediumScreen,
    isSmallScreen,
    isTablet,
    isMobile
  }
}

import Top from '@/components/shared/Top'
import { getAdBanners } from '@/remote/adBanner'
import { getCards } from '@/remote/card'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    getCards().then((res) => {
      console.log(res)
    })

    getAdBanners().then((res) => {
      console.log(res)
    })

    return () => {}
  }, [])

  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
    </div>
  )
}

export default HomePage

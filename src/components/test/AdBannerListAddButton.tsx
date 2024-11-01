import { store } from '@/remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { COLLECTIONS } from '../constants'
import Button from '../shared/Button'
import { adBanners } from '@/mock/data'

const AdBannerListAddButton = () => {
  const handleButtonClick = async () => {
    // Firestore에 batch 작업 생성
    const batch = writeBatch(store)

    // adBanners 배열의 각 배너에 대해 Firestore에 새 문서 생성 및 데이터 설정
    adBanners.forEach((banner: any) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER)) // 새로운 문서 참조 생성
      batch.set(docRef, banner) // 문서에 배너 데이터 설정
    })

    // 모든 batch 작업 커밋
    await batch.commit()

    alert('배너 리스트가 추가되었습니다.')
  }

  return <Button onClick={handleButtonClick}>배너 리스트 추가하기</Button>
}

export default AdBannerListAddButton

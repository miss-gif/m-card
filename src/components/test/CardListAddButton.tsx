import { store } from '@/remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { COLLECTIONS } from '../constants'
import Button from '../shared/Button'
import { card_list } from './../../mock/data'

const CardListAddButton = () => {
  const handleButtonClick = async () => {
    // Firestore에 batch 작업 생성
    const batch = writeBatch(store)

    // card_list 배열의 각 카드에 대해 Firestore에 새 문서 생성 및 데이터 설정
    card_list.forEach((card: any) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD)) // 새로운 문서 참조 생성
      batch.set(docRef, card) // 문서에 카드 데이터 설정
    })

    // 모든 batch 작업 커밋
    await batch.commit()

    alert('카드 리스트가 추가되었습니다.')
  }

  return <Button onClick={handleButtonClick}>카드 리스트 추가하기</Button>
}

export default CardListAddButton

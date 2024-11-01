import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/components/constants'

export const getCards = async () => {
  const cardSnapshot = await getDocs(collection(store, COLLECTIONS.CARD))

  return cardSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

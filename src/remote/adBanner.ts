import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'
import { AdBanner } from '@/types/card'
import { COLLECTIONS } from '@/components/constants'

export async function getAdBanners() {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER),
  )

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}

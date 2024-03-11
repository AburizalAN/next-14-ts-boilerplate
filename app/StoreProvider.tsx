'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@app/redux_utils/store'
import { setLocale } from "@app/features/general/redux_slice"

export default function StoreProvider({
  locale,
  children
}: {
  locale: string,
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(setLocale(locale))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
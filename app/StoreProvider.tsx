'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@app/utils/redux_utils/store'
import { setLocale, setToken } from "@app/features/general/redux_slice"

export default function StoreProvider({
  locale,
  token,
  children
}: {
  locale: string,
  token: string,
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(setLocale(locale))
    storeRef.current.dispatch(setToken(token))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
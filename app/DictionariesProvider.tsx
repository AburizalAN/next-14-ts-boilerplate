"use client"

import dictionaries from "@app/features/general/dictionaries"
import { useAppSelector } from "@app/utils/redux_utils/hooks"

export default function DictionariesProvider({ children }: { children: React.ReactNode }) {
  const locale = useAppSelector((state) => state.general.locale)
  dictionaries.setLanguage(locale)
  return (
    <>
      {children}
    </>
  )
}
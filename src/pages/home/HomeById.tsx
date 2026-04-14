import type { ComponentType } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { HomeVariant1, HomeVariant2, HomeVariant3, HomeVariant4, HomeVariant5 } from './variants/V1to5'
import { HomeVariant10, HomeVariant6, HomeVariant7, HomeVariant8, HomeVariant9 } from './variants/V6to10'
import { useI18n } from '../../i18n/I18nProvider'

const registry: Record<string, ComponentType> = {
  '1': HomeVariant1,
  '2': HomeVariant2,
  '3': HomeVariant3,
  '4': HomeVariant4,
  '5': HomeVariant5,
  '6': HomeVariant6,
  '7': HomeVariant7,
  '8': HomeVariant8,
  '9': HomeVariant9,
  '10': HomeVariant10,
}

export function HomeById() {
  const { id } = useParams()
  const { locale } = useI18n()
  const Cmp = id && registry[id]
  if (!Cmp) return <Navigate to="/" replace />
  const back = locale === 'es' ? 'Volver a todos los home themes' : locale === 'ca' ? 'Tornar a tots els home themes' : 'Back to all homepage themes'
  return (
    <div className="space-y-8">
      <Cmp />
      <p className="text-center text-sm text-slate-500">
        <Link to="/" className="cursor-pointer font-medium text-violet-600 hover:underline dark:text-violet-300">
          {back}
        </Link>
      </p>
    </div>
  )
}

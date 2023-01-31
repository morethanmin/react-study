import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

type Props = {
  errorFallback?: React.ReactNode
  loadingFallback?: React.ReactNode
  children: React.ReactNode
}

const AsyncBoundery: React.FC<Props> = ({
  errorFallback = <></>,
  loadingFallback = <></>,
  children,
}) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default AsyncBoundery

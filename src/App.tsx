import React, { lazy, Profiler, StrictMode, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeProvider';

const App: React.FC = () => {

  const onRender = (id: string, phase: string, actualDuration: number, baseDuration: number, startTime: number, commitTime: number) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  }

  const MainPage = lazy(() => import('./pages/MainPage'));

  return (
    <>
      <StrictMode>
        <Profiler id="App" onRender={onRender}>
          <ThemeProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <MainPage />
            </Suspense>
          </ThemeProvider>
        </Profiler>
      </StrictMode>
    </>
  )
}

export default App

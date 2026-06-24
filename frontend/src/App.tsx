import './App.css'
import { Content } from './components/Content/Content'
import { FiltersProvider } from './contexts/FiltersProvider'
import { CarListProvider } from './contexts/CarListProvider'
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle'

export function App() {
    return (
        <div className="appShell">
            <div className="mainContainer">
                <header className="pageHeader">
                    <div>
                        <h1 className="title">CarPark</h1>
                    </div>
                    <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
                        <ThemeToggle />
                    </div>
                </header>

                <FiltersProvider>
                    <CarListProvider>
                        <Content />
                    </CarListProvider>
                </FiltersProvider>
            </div>
        </div>
    )
}


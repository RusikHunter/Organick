import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import App from './App.tsx'
import "./styles/styles.scss"

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)

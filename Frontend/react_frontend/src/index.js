import react_dom from 'react-dom/client'
import Title from './Components/title.js'
import SideBar from './Components/side_bar.js'

/*****************It all starts from here***************************/
const RootComponent = () => {
    return (
        <div>
            <Title />
            <SideBar />
        </div>
    )
}
react_dom.createRoot(document.getElementById('rootComponent')).render(<RootComponent />)
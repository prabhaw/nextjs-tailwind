import PrivateNavbar from "../components/share/privateNav.component";

const PrivateLayout = (props)=>{
    return(<>
    <div className='bg-gray-300 h-screen text-gray-600 flex flex-col'>
    <div className='private-nav'><PrivateNavbar/></div>
    <div className='sidebar'></div>
    <div className='container-pare'>{props.children}</div>
    </div>
    
    </>)
}

export default PrivateLayout;
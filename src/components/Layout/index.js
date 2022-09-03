import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="page">
        <div className="tags top-tags" aria-hidden="true">
          <span className="tag-body">&lt;/body&gt;</span>
        </div>
        <Outlet />
        <div className="tags bottom-tags" aria-hidden="true">
          <span className="tag-body">&lt;/body&gt;</span>
          <br />
          <span>&lt;/html&gt;</span>
        </div>
      </div>
    </div>
  )
}
export default Layout;
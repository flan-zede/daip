import NavBar from './NavBar';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout(props: any) {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="page-wrapper">
        <NavBar />
        <div className="page-content">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

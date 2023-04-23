import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout(props: any) {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex'>
        <Sidebar/>
        <div className='ml-20 px-3 pt-3 w-full'>
          <Header />
          <main>
            {props.children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

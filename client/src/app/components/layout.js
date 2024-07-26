// components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <main className='m-2 mx-4'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

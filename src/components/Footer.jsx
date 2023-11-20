import { footerLinks, socialMedia } from '../constants';
import mellaLogo from '../assets/mellaLogo.png';
import { useNavigate } from 'react-router';
const Footer = () => {
  const history = useNavigate();
  function handleClick(link) {
    // Check if link.name is either "Home", "About", or "Contact"
    if (
      link.name === 'Home' ||
      link.name === 'About us' ||
      link.name === 'Contact'
    ) {
      // Your onClick logic here
      window.scrollTo(0, 0);
      return history(`${link.link}`);
    }
  }
  return (
    <>
      <footer className="bg-white text-black px-[1rem] md:px-[4rem] lgg:px-[8rem]">
        <div className=" mx-auto py-12 grid grid-cols-1 ss:grid-cols-4  gap-8 pl-4 pr-4">
          <div>
            <img className="nav__logo" src={mellaLogo} />
          </div>

          {footerLinks.map((footerlink) => (
            <div key={footerlink.title}>
              <h4 className="text-xl font-bold mb-4">{footerlink.title}</h4>
              <ul className="list-none mb-6">
                {footerlink.links.map((link) => (
                  <li key={link.name} className="mb-2">
                    <a
                      className="text-lg hover:text-yellow-500 hover:cursor-pointer"
                      href={
                        link.name === 'loremipsum@gmail.com'
                          ? link.link
                          : undefined
                      }
                      onClick={() => handleClick(link)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex space-x-4">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.id} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className=" py-6 pl-4 pr-4 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg text-dimWhite">
            &copy; 2023 company. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

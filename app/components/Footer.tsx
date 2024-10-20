import {
  IconHome,
  IconSearch,
  IconBrandFacebook,
  IconBrandInstagram,
  IconDeviceMobile,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  const mock = [
    {
      icon: <IconHome className="w-6 h-6" />,
      label: "ติดต่อเรา",
      href: "/",
    },
    {
      icon: <IconSearch className="w-6 h-6" />,
      label: "ข้อตกลงและเงื่อนไข",
      href: "/search",
    },
  ];

  const mock_social = [
    {
      icon: <IconBrandFacebook className="w-10 h-10" />,
    },
    {
      icon: <IconBrandInstagram className="w-10 h-10" />,
    },
    {
      icon: <IconDeviceMobile className="w-10 h-10" />,
    },
  ];

  return (
    <footer className="bg-light-primary text-white text-center ">
      <ul className="pb-10">
        {mock.map((item, idx) => (
          <li key={idx} className="border-b py-4 mx-6 text-lg">
            {item.label}
          </li>
        ))}
      </ul>
      <section className="pb-4 space-x-2">
        {mock_social.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="inline-block px-2 rounded-lg p-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </section>
    </footer>
  );
};

export default Footer;

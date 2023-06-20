/* eslint-disable react/prop-types */
const Item = ({ Links, title }) => {
    return (
      <ul>
        <h1 className="mb-5 text-3xl text-black font-semibold">{title}</h1>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-gray-800 mb-3 text-1xl hover:text-teal-400 duration-300
            cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Item;
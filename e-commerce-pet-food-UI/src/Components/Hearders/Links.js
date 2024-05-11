// Links.js
import ProductFinder from '../SpecialPurposeElem/ProductFinder';

const Links = ({ setSelectedCategory }) => {
  return (
    <ul className="links">
      <li>
        <ProductFinder
          setSelectedCategory={setSelectedCategory}
          categoryName="Dog Food"
          tagName="Dog Food"
          imgUrl="images/dog.png"
        />
      </li>
      <li>
        <ProductFinder
          setSelectedCategory={setSelectedCategory}
          categoryName="Cat Food"
          tagName="Cat Food"
          imgUrl="images/cat.png"
        />
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
    </ul>
  );
};

export default Links;
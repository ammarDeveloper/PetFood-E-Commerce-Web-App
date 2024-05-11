import { useSpring, animated } from 'react-spring';
import '../../CSS/SpecialPurposeElem/Success.css' 
import { FaCheckCircle } from 'react-icons/fa';


export default function Success() {

  const fade = useSpring({
    from: { opacity: 0 }, 
    to: { opacity: 1 },
  });

  return (
    <animated.div className="success" style={fade}>
      <div className="success-wrap">
      <FaCheckCircle style={{color: "green"}} size={120} />
        <h1>Congratulations!</h1>
        <p>Your account has been successfully created. Please login</p>
      </div>
    </animated.div>
  );

}
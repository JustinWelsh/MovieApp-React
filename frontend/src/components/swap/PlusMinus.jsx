import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

export function PlusMinus(props) {
  return (
    <label className="swap swap-rotate">
      {/* <!-- this hidden checkbox controls the state --> */}
      <input type="checkbox" />

      <div className="swap-on">
        <div className="text-black text-xl relative right-2">
          <AiFillMinusCircle />
        </div>
      </div>
      <div className="swap-off">
        <div className="text-green-500 text-xl relative right-2">
          <AiFillPlusCircle />
        </div>
      </div>
        {props.children}
    </label>
  );
}

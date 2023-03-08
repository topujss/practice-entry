import { useDispatch } from 'react-redux';
import {
  amberColor,
  blueColor,
  cyanColor,
  emeraldColor,
  fuchsiaColor,
  grayColor,
  greenColor,
  indigoColor,
  limeColor,
  orangeColor,
  pinkColor,
  purpleColor,
  redColor,
  roseColor,
  skyColor,
  tealColor,
  violetColor,
  yellowColor,
} from '../../redux/color/colorAction';

const Color = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <section className="z-0 my-10">
      <h1 className="text-2xl font-bold uppercase border-b-4 pb-2 mb-2 border-lime-600 text-white">{title}</h1>
      <div className="btn-group my-5 flex gap-3 justify-center flex-wrap">
        <button
          className="text-xl bg-gray-500 rounded-md px-3 py-2 text-white"
          onClick={() => dispatch(grayColor())}
        >
          Gray
        </button>
        <button
          className="text-xl bg-red-500 rounded-md px-3 py-2 text-white"
          onClick={() => dispatch(redColor())}
        >
          Red
        </button>
        <button
          className="text-xl bg-orange-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(orangeColor())}
        >
          orange
        </button>
        <button
          className="text-xl bg-amber-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(amberColor())}
        >
          amber
        </button>
        <button
          className="text-xl bg-yellow-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(yellowColor())}
        >
          yellow
        </button>
        <button
          className="text-xl bg-lime-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(limeColor())}
        >
          lime
        </button>
        <button
          className="text-xl bg-green-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(greenColor())}
        >
          green
        </button>
        <button
          className="text-xl bg-emerald-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(emeraldColor())}
        >
          emerald
        </button>
        <button
          className="text-xl bg-teal-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(tealColor())}
        >
          teal
        </button>
        <button
          className="text-xl bg-cyan-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(cyanColor())}
        >
          cyan
        </button>
        <button
          className="text-xl bg-sky-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(skyColor())}
        >
          sky
        </button>
        <button
          className="text-xl bg-blue-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(blueColor())}
        >
          blue
        </button>
        <button
          className="text-xl bg-indigo-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(indigoColor())}
        >
          indigo
        </button>
        <button
          className="text-xl bg-violet-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(violetColor())}
        >
          violet
        </button>
        <button
          className="text-xl bg-purple-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(purpleColor())}
        >
          purple
        </button>
        <button
          className="text-xl bg-fuchsia-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(fuchsiaColor())}
        >
          fuchsia
        </button>
        <button
          className="text-xl bg-pink-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(pinkColor())}
        >
          pink
        </button>
        <button
          className="text-xl bg-rose-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch(roseColor())}
        >
          rose
        </button>
      </div>
    </section>
  );
};

export default Color;

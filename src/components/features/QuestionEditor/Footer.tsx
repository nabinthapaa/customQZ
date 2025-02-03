import { memo } from "react";

export const Footer = memo(() => {
  return (
    <div className="flex justify-between  items-center mt-4 text-gray-700  text-sm">
      <div>
        <label className="text-lg leading-10">Randomize Order</label>
        <div className="flex items-center gap-x-2 bg-gray-400/10 text-left px-4 text-black rounded-md w-fit font-medium">
          <select className="bg-transparent focus:outline-none  py-2">
            <option>Keep choices in current order</option>
            <option>Shuffle</option>
          </select>
        </div>
      </div>
      <div className="w-fit">
        <label className="text-lg leading-10">Estimation time</label>
        <div className="flex items-center bg-gray-400/10 text-black rounded-md w-fit font-medium">
          <input
            type="number"
            className="bg-transparent focus:outline-none min-w-[32px] max-w-[64px] text-left  p-2"
            defaultValue={2}
          />
          <span className="inline-block w-fit px-2 border-l-2 border-gray-300">
            Mins
          </span>
        </div>
      </div>
      <div className="w-fit">
        <label className="text-lg leading-10">Mark as point</label>
        <div className="flex items-center bg-gray-400/10 text-black rounded-md w-fit font-medium">
          <input
            type="number"
            className="bg-transparent focus:outline-none min-w-[32px] max-w-[64px] text-left  p-2"
            defaultValue={2}
          />
          <span className="inline-block w-fit px-2 border-l-2 border-gray-300">
            Points
          </span>
        </div>
      </div>
    </div>
  );
});

import React from 'react';
import { useDispatch } from 'react-redux';
import { setBg } from '../../redux/food/foodAction';

const Food = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <section className="z-10">
      <h1 className="text-2xl font-bold uppercase border-b-4 pb-2 mb-2 border-lime-600 text-white">{title}</h1>

      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 cursor-pointer"
        onChange={(e) => dispatch(setBg(e.target.value))}
      >
        <option value="">-Select-</option>
        <option value="https://blog.mystart.com/wp-content/uploads/IN_Night_Sky_5afaf17fa16770ec226a7983.jpeg">
          Sky
        </option>
        <option value="https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print">
          Mountains
        </option>
        <option selected value="https://cdn.unenvironment.org/2022-12/nature-g4b38243a1_1920.jpg">
          Night
        </option>
        <option value="https://www.pbs.org/wnet/nature/files/2019/07/Super-Hummingbirds-2.jpg">Bird</option>
        <option value="https://imgproxy.natucate.com/54vLDNe_Pw_yUYAJaejRGPqpBmAWbjdUMsashn9lAek/rs:fill/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlYXJ0ZW4vNmMwODZlYmEtNzk3Yi00ZDVjLTk2YTItODhhNGM4OWUyODdlLzIxOWIzMTA5Y2ItMTU2NzQzMzYxMi8xMl9kYW5pZWxfY2FuX2JjLTIwNy5qcGc">
          Reflection
        </option>
      </select>
    </section>
  );
};

export default Food;

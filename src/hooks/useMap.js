import { useMemo, useState } from "react";

// for reference read this - https://www.30secondsofcode.org/react/s/use-map
const useMap = initialValue => {
    const [map, setMap] = useState(new Map(initialValue));
  
    const actions = useMemo(
      () => ({
        set: (key, value) =>
          setMap(prevMap => {
            const nextMap = new Map(prevMap);
            nextMap.set(key, value);
            return nextMap;
          }),
        remove: (key, value) =>
          setMap(prevMap => {
            const nextMap = new Map(prevMap);
            nextMap.delete(key, value);
            return nextMap;
          }),
        clear: () => setMap(new Map()),
      }),
      [setMap]
    );
  
    return [map, actions];
  };

export default useMap;
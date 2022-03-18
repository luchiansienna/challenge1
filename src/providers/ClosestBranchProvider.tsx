import React, { createContext } from 'react';
import { useEffect, useState } from 'react';
import { SearchLocation } from '../SearchLocation';
import useLoading from '../useLoading';
import { Branch } from '../Branch';
import { closestBranchTo } from '../distances';

const ComponentContext = createContext<{
  closest: Branch | undefined;
  search: SearchLocation | undefined;
  setSearch: React.Dispatch<React.SetStateAction<SearchLocation>>;
  state: string;
}>({ closest: undefined, search: undefined, setSearch: () => {}, state: '' });

interface IClosestBranchProvider {
  children?: React.ReactNode;
}

export const ClosestBranchProvider = ({ children }: IClosestBranchProvider) => {
  const [state, branches] = useLoading();
  const [search, setSearch] = useState<SearchLocation>();
  const [closest, setClosest] = useState<undefined | Branch>();

  useEffect(() => {
    if (branches && typeof search === 'object') {
      setClosest(closestBranchTo(search, branches));
    } else {
      setClosest(undefined);
    }
  }, [search, branches]);
  return (
    <ComponentContext.Provider value={{ closest, search, setSearch, state }}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useClosestBranch = () => React.useContext(ComponentContext);

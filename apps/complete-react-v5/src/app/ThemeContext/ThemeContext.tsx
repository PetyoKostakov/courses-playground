import { createContext} from 'react';

interface IContextProps {
  state: string;
  dispatch: ({type}:{type:string}) => void;
}

const ThemeContext = createContext<any>(null);

export default ThemeContext;

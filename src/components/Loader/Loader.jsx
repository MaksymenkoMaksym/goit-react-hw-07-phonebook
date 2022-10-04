import { RotatingLines } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader = () => (
  <RotatingLines
    strokeColor="pink"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
);

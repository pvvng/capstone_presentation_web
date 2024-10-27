import ColContainer from "./components/ColContainer";
import MainContainer from './components/type/MainContainer';

export default function Home() {
  return (
    <>
      <div className="row row-center w-100" style={{margin : 'auto'}}>
        <MainContainer />
        <ColContainer color="black" type="1" />
        <ColContainer color="black" type="2" />
        <ColContainer color="black" type="3" />
      </div>
    </>
  );
}

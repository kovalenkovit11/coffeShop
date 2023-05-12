import "./style.scss";
import DropDown from "../../components/DropDown/DropDown";


function Catalog({ selected, setSelected }) {
  
 

  return (
    <div className="container">
      <div>
        <p className="catalog-title">Каталог</p>
      </div>
    <div className="dropDowns">
    <DropDown selected={selected} setSelected={setSelected}/>
      <DropDown selected={selected} setSelected={setSelected}/>
      <DropDown selected={selected} setSelected={setSelected}/>
      <DropDown selected={selected} setSelected={setSelected}/>
      <DropDown selected={selected} setSelected={setSelected}/>
      <DropDown selected={selected} setSelected={setSelected}/>
      <DropDown selected={selected} setSelected={setSelected}/>
    </div>
    </div>
  );
}

export default Catalog;



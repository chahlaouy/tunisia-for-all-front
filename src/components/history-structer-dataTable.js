import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    getStructers, deleteStructer,
    getStructerById
} from "../actions/structerAction";
import history from "../history";
import moment from "moment";

class HistoryStructerDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        structer : {
            CodeStruct : "",
            nomPresident:"",
            nomVice:"",
            nomDirEx:"",
            nomTresor:"",
            nomMembreBureau:"",
            GouvStruct : "",
            DelegStruct : "",
            DateCrea : "",
            TypeStruct : "",
            MatriFisc : "",
            JortCreation : "",
            Numccptebq : "",
            CodePresident : "",
            CodeVicePresident: "",
            CodeDirEx: "",
            CodeTresor: "",
            codeMembreBur: ""
      },
      showHide: false,
    };
    this.handleSearchForMembers = this.handleSearchForMembers.bind(this);
  }
  componentDidMount() {
    this.props.getStructers();
  }
  static propTypes = {
    getStructers: PropTypes.func.isRequired,
    structers: PropTypes.object.isRequired,
  };

  deleteStructer(structer) {
   
    this.props.deleteStructer(structer);
  }
  updateStructer = (viewStructerDetails) => {
    console.log("this.state ", viewStructerDetails);
    history.push("/structer/update", { structer: viewStructerDetails });
  };
  handleModalShowHide(structer) {
    console.log(structer);
    this.setState({ structer: structer });
    this.setState({ showHide: !this.state.showHide });
  }
  handleSearchForMembers(event){
      if(event.target.value != '' && event.target.value != ' '){
          this.props.getStructerById(event.target.value ?? '');
          return 
      }
      this.props.getStructers();
}
  render() {
    let className =
      "hidden z-50 fixed top-0 left-0 w-full h-screen overflow-scroll flex items-center justify-center";
    if (this.state.showHide) {
      className =
        "z-50 fixed top-0 left-0 w-full h-screen overflow-scroll flex items-center justify-center";
    }
    const { structers } = this.props.structers;

    const modal = (
        <div className={className}>
          <div className="absolute z-40 w-full h-full bg-gray-900 bg-opacity-50"></div>
          <div>
            
            <div className="relative z-40 bg-white shadow-2xl rounded-lg -mt-2">
              <h2 className="text-4xl bg-green-300 text-white px-4 py-4 rounded-t-lg uppercase">
                {" "}
                {this.state.structer.CodeStruct}
              </h2>
              <div className="px-4 py-4 flex justify-between text-lg tracking-wider leading-loose">
                
                
                <div className="flex justify-between">
  
                  <ul className="mr-8">
                    <li className="py-2">
                      <strong>Code Structure: </strong>
                      <span>{this.state.structer.CodeStruct}</span>
                    </li>
                    <li className="py-2">
                      <strong>Nom President: </strong>
                      <span>{this.state.structer.nomPresident}</span>
                    </li>
                    <li className="py-2">
                      <strong>Nom Vice Président: </strong>
                      <span>{this.state.structer.nomVice}</span>
                    </li>
                    <li className="py-2">
                      <strong>Nom directeur: </strong>
                      <span>{this.state.structer.nomDirEx}</span>
                    </li>
                    <li className="py-2">
                      <strong>Nom Tresor: </strong>
                      <span>{this.state.structer.nomTresor}</span>
                    </li>
  
                    <li className="py-4">
                      <strong>Gouvernerat:</strong>
                      <span>{this.state.structer.GouvStruct}</span>
                    </li>
                    <li className="py-2">
                      <strong>Delegation:</strong>
                      <span>{this.state.structer.DelegStruct}</span>
                    </li>
                    <li className="py-2">
                      <strong>Nom Membre Bureau: </strong>
                      <span>
                      {this.state.structer.nomMembreBureau}
                      </span>
                    </li>
                    <li className="py-2">
                      <strong>Date Creation: </strong>
                      <span>
                      {moment(this.state.structer.DateCrea).format('MMMM Do YYYY')}
                      </span>
                    </li>
                  </ul>
  
                  <ul className="mr-8">
                    <li className="py-2">
                      <strong>Type Structure: </strong>
                      <span>{this.state.structer.TypeStruct}</span>
                    </li>
                    <li className="py-2">
                      <strong>Matricule Fiscale: </strong>
                      <span>{this.state.structer.MatriFisc}</span>
                    </li>
                    <li className="py-2">
                      <strong>Jort Creation: </strong>
                      <span>{this.state.structer.JortCreation}</span>
                    </li>
                    <li className="py-2">
                      <strong>Numccptebq: </strong>
                      <span>{this.state.structer.Numccptebq}</span>
                    </li>
                    <li className="py-2">
                      <strong>Code President: </strong>
                      <span>{this.state.structer.CodePresident}</span>
                    </li>
                    <li className="py-2">
                      <strong>Code Vice President: </strong>
                      <span>{this.state.structer.CodeVicePresident}</span>
                    </li>
                    <li className="py-2">
                      <strong>Code Dir Ex: </strong>
                      <span>{this.state.structer.CodeDirEx}</span>
                    </li>
                    <li className="py-2">
                      <strong>Code Tresor: </strong>
                      <span>{this.state.structer.CodeTresor}</span>
                    </li>
                    <li className="py-2">
                      <strong>code Membre Bureau:</strong>
                      <span>{this.state.structer.codeMembreBur}</span>
                    </li>
                  </ul>
                
                </div>
              
              
                
              </div>
              <div className="flex items-center justify-end py-4 px-4">
                <button
                  className="block px-4 text-sm py-2 bg-red-400 rounded text-white"
                  onClick={() => this.handleModalShowHide(this.state.structer)}
                >
                  {" "}
                  Fermer{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    return (
      <div>
        {modal}
        <div className="my-4">

            <button className="flex items-center relative focus:outline-none border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-72">

                <input onChange={this.handleSearchForMembers} type="search" className="block px-2 py-3 text-xs flex-1 relative z-10 rounded-l-md border-gray-200 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Chercher" />

                <div className="px-5 py-3 bg-gray-100 rounded-r-md">
                    <div className="w-4">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs></defs><title>x</title><path className="cls-1" d="M120.5891,106.37506,96.5609,80.39355l-3.842,3.8457-4.35187-4.35187c.33368-.43195.667-.864.98346-1.30475A46.77661,46.77661,0,1,0,77.87956,89.85687q.99472-.68619,1.955-1.42987l4.34509,4.345-4.31427,4.31409,26.5097,23.5246a10.0585,10.0585,0,1,0,14.21405-14.23566ZM74.21977,74.22931a32.4793,32.4793,0,1,1,9.48859-22.94189A32.48241,32.48241,0,0,1,74.21977,74.22931Z"/></svg>
                    </div>
                </div>
            </button>
        </div>
        {structers.map((structer, index) => (

          <div className="flex mb-4">
            <div onClick={() => this.handleModalShowHide(structer)} className="w-16 h-16 rounded-full flex items-center justify-center mr-2 cursor-pointer bg-gray-300">
              {/* <img src={"http://localhost:3001/api/public/" + structer.} className="w-16 h-16 rounded-full bg-cover bg-center object-cover" /> */}
            </div>
            <div>
                <span className="block font-bold mb-2 text-sm">
                  {structer.CodeStruct}
                </span>
                <span className="block text-xs text-gray-600 mb-1">Ajoute le {moment(structer.createdAt).format("MMMM Do YYYY")}</span>
                <span className="block text-xs text-gray-600">Derniere mise a jour le {moment(structer.updateddAt).format("MMMM Do YYYY")}</span>
            </div>
          </div>
        ))}
        {structers.length === 0 ? "No Structers Create New Structer" : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    structers: state.structers,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getStructers: () => dispatch(getStructers()),
    deleteStructer: (structer) => dispatch(deleteStructer(structer)),
    getStructerById: (id) => dispatch(getStructerById(id)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(HistoryStructerDataTable);

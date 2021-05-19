import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getMembers,
  deleteMember,
  getMemberById,
} from "../actions/memberAction";
import history from "../history";
import moment from "moment";

class HistoryDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        gouvernerat: "",
        delegation: "",
        image: "",
        firstName: "",
        lastName: "",
        profession: "",
        secteur: "",
        nationality: "",
        cin: "",
        sexe: "",
        type: "",
        birthDate: "",
        joiningDate: "",
        birthPlace: "",
        email: "",
        telephone: "",
        codeStructure: "",
        codeCommission: "",
        observation: "",
      },
      showHide: false,
    };
    this.handleSearchForMembers = this.handleSearchForMembers.bind(this);
  }
  deleteMember(member) {
    this.props.deleteMember(member);
  }
  componentDidMount() {
    this.props.getMembers();
  }
  updateMember = (member) => {
    console.log("this.state ", member);
    history.push("/member/update", { member: member });
  };
  static propTypes = {
    getMembers: PropTypes.func.isRequired,
    members: PropTypes.object.isRequired,
  };
  handleModalShowHide(member) {
    console.log(member);
    this.setState({ member: member });
    this.setState({ showHide: !this.state.showHide });
  }
  handleSearchForMembers(event){
      if(event.target.value != '' && event.target.value != ' '){
          this.props.getMemberById(event.target.value ?? '');
          return 
      }
      this.props.getMembers();
}
  render() {
    let className =
      "hidden z-50 fixed top-0 left-0 w-full h-screen overflow-scroll flex items-center justify-center";
    if (this.state.showHide) {
      className =
        "z-50 fixed top-0 left-0 w-full h-screen overflow-scroll flex items-center justify-center";
    }
    const { members } = this.props.members;

    const modal = (
      <div className={className}>
        <div className="absolute z-40 w-full h-full bg-gray-900 bg-opacity-50"></div>
        <div>
          
          <div className="relative z-40 bg-white shadow-2xl rounded-lg -mt-2">
            <h2 className="text-4xl bg-green-300 text-white px-4 py-4 rounded-t-lg uppercase">
              {" "}
              {this.state.member.firstName}
            </h2>
            <div className="px-4 py-4 flex justify-between text-lg tracking-wider leading-loose">
              
              <div className="mr-8">
              <div className="w-56 h-72 rounded-md bg-gray-100 shadow-2xl flex items-center justify-center">
                <img src={"http://localhost:3001/api/public/" + this.state.member.image} className="w-56 h-72 rounded-md bg-cover bg-center object-cover" />
              </div>
              </div>
              <div className="flex justify-between">

                <ul className="mr-8">
                  <li className="py-2">
                    <strong>Nom:</strong>
                    <span>{this.state.member.firstName}</span>
                  </li>
                  <li className="py-2">
                    <strong>Prénom:</strong>
                    <span>{this.state.member.lastName}</span>
                  </li>
                  <li className="py-2">
                    <strong>Email:</strong>
                    <span>{this.state.member.email}</span>
                  </li>
                  <li className="py-2">
                    <strong>Cin:</strong>
                    <span>{this.state.member.cin}</span>
                  </li>
                  <li className="py-2">
                    <strong>Secteur:</strong>
                    <span>{this.state.member.secteur}</span>
                  </li>

                  <li className="py-4">
                    <strong>Gouvernerat:</strong>
                    <span>{this.state.member.gouvernerat}</span>
                  </li>
                  <li className="py-2">
                    <strong>Delegation:</strong>
                    <span>{this.state.member.delegation}</span>
                  </li>
                  <li className="py-2">
                    <strong>Date de naissance:</strong>
                    <span>
                      {moment(this.state.member.birthDate).format("MMMM Do YYYY")}
                    </span>
                  </li>
                  <li className="py-2">
                    <strong>Joining Date:</strong>
                    <span>
                      {moment(this.state.member.joiningDate).format(
                        "MMMM Do YYYY"
                      )}
                    </span>
                  </li>
                </ul>

                <ul className="mr-8">
                  <li className="py-2">
                    <strong>Nationalité:</strong>
                    <span>{this.state.member.nationality}</span>
                  </li>
                  <li className="py-2">
                    <strong>Profession:</strong>
                    <span>{this.state.member.profession}</span>
                  </li>
                  <li className="py-2">
                    <strong>Genre:</strong>
                    <span>{this.state.member.sexe}</span>
                  </li>
                  <li className="py-2">
                    <strong>Télephone:</strong>
                    <span>{this.state.member.telephone}</span>
                  </li>
                  <li className="py-2">
                    <strong>Type:</strong>
                    <span>{this.state.member.type}</span>
                  </li>
                  <li className="py-2">
                    <strong>Email:</strong>
                    <span>{this.state.member.email}</span>
                  </li>
                  <li className="py-2">
                    <strong>Code Membre:</strong>
                    <span>{this.state.member.codeMember}</span>
                  </li>
                  <li className="py-2">
                    <strong>Code Structure:</strong>
                    <span>{this.state.member.codeStructure}</span>
                  </li>
                </ul>
                <ul>
                  <li className="py-2">
                    <strong>Code Commission:</strong>
                    <span>{this.state.member.codeCommission}</span>
                  </li>
                  <li className="py-2">
                    <strong>Observation:</strong>
                    <span>{this.state.member.observation}</span>
                  </li>
                </ul>
              
              
              </div>
            
            
              
            </div>
            <div className="flex items-center justify-end py-4 px-4">
              <button
                className="block px-4 text-sm py-2 bg-red-400 rounded text-white"
                onClick={() => this.handleModalShowHide(this.state.member)}
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
        {members.map((member, index) => (

          <div className="flex mb-4">
            <div onClick={() => this.handleModalShowHide(member)} className="w-16 h-16 rounded-full flex items-center justify-center mr-2 cursor-pointer">
              <img src={"http://localhost:3001/api/public/" + member.image} className="w-16 h-16 rounded-full bg-cover bg-center object-cover" />
            </div>
            <div>
                <span className="block font-bold mb-2 text-sm">
                  {member.firstName}
                </span>
                <span className="block text-xs text-gray-600 mb-1">Ajoute le {moment(member.createdAt).format("MMMM Do YYYY")}</span>
                <span className="block text-xs text-gray-600">Derniere mise a jour le {moment(member.updateddAt).format("MMMM Do YYYY")}</span>
            </div>
          </div>
        ))}
        {members.length === 0 ? "No Members Create New Members" : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch) => ({
  getMembers: () => dispatch(getMembers()),
  deleteMember: (member) => dispatch(deleteMember(member)),
  getMemberById: (id) => dispatch(getMemberById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDataTable);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMember, getMembers } from "../actions/memberAction";
import Dropdown from "../components/dropdown";
import history from "../history";

import axios from "axios";

class Modal extends React.Component {
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
        codeMember: ""
      },
      selectedFile: null,
    };

    this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    static propTypes = {
      getMembers: PropTypes.func.isRequired,
      members: PropTypes.object.isRequired,
    }

  /** callback for passing data from child to parent component it will be passed as aprop */
  handleCallback = (childData) => {
    const { member } = this.state;
    const { members } = this.props.members;
    const maxid = members.length;
    console.log('max :' + maxid)
    const memberDetails = {
      ...member,
      gouvernerat: childData.gouvernerat.name, 
      delegation: childData.delegation.name,
      secteur: childData.secteur.name,
      codeStructure: `${childData.gouvernerat.code}${childData.delegation.code}${childData.secteur.code}`,
      codeMember: `${childData.gouvernerat.code}${childData.delegation.code}${childData.secteur.code}00${maxid + 1}`,
    };
    this.setState({ member: memberDetails }, () => {
      console.log(this.state);
    });
    console.log(childData);
    this.setState();
  };
  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  componentDidMount() {
    this.props.getMembers();
  }
  closeModal = () => {
    this.props.parentCallback("");
  };
  handleChangeFor = (propertyName) => (event) => {
    const { member } = this.state;
    const memberDetails = {
      ...member,
      [propertyName]: event.target.value,
    };
    this.setState({ member: memberDetails });
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:3001/api/members/upload", data, {})
      .then((res) => {
        console.log(res.data.filename);
        const { member } = this.state;
        const memberDetails = {
          ...member,
          joiningDate: new Intl.DateTimeFormat("en-US").format(
            this.state.joiningDate
          ),
          image: res.data.filename,
        };
        this.setState({ member: memberDetails }, () => {
          this.props.addMember(this.state.member);
        });
        // this.setState.joiningDate = new Intl.DateTimeFormat('en-US').format(this.state.joiningDate);
        // this.props.addMember(this.state.member);
      });
  }

  render() {
    return (
      <div className="h-screen overflow-scroll py-8">
        <div className="absolute z-40 w-full top-0 left-0 h-full bg-gray-900 bg-opacity-50"></div>
        <div className="relative z-40 bg-white shadow-2xl rounded-lg -mt-2">
          <h2 className="text-4xl bg-green-300 text-gray-800 px-4 py-4 rounded-t-lg uppercase">
            {" "}
            Ajouter un adhérant
          </h2>
          <div className="px-4 py-4 text-lg tracking-wider leading-loose">
            <form
              ref={(el) => (this.myFormRef = el)}
              onSubmit={this.handleSubmit}
            >
              <Dropdown parentCallback={this.handleCallback} />
              <div className="grid-cols-3 grid gap-4">
                <div className="mb-4 w-64">
                  <label htmlFor="firstName" className="block mb-1">
                    Nom
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="firstName"
                    autoComplete="off"
                    onChange={this.handleChangeFor("firstName")}
                    value={this.state.member.firstName}
                  />
                </div>
                <div className="mb-4 w-64">
                  <label htmlFor="firstName" className="block mb-1">
                    Prénom
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                    id="lastName"
                    autoComplete="off"
                    onChange={this.handleChangeFor("lastName")}
                    value={this.state.member.lastName}
                  />
                </div>
                <div className="mb-4 w-64">
                  <label htmlFor="profession" className="block mb-1">
                    Profession
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                    id="profession"
                    autoComplete="off"
                    onChange={this.handleChangeFor("profession")}
                    value={this.state.member.profession}
                  />
                </div>
                {/* <div className="mb-4 w-64">
                                        <label htmlFor="secteur" className="block mb-1">
                                        Secteur
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="secteur"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor("secteur")}
                                        value={this.state.member.secteur}
                                        />
                                    </div>   */}
                <div className="mb-4 w-64">
                  <label htmlFor="firstName" className="block mb-1">
                    Nationalité
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                    id="nationality"
                    autoComplete="off"
                    onChange={this.handleChangeFor("nationality")}
                    value={this.state.member.nationality}
                  />
                </div>
                <div className="mb-4 w-64">
                  <label htmlFor="firstName" className="block mb-1">
                    CIN/Passport
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                    id="cin"
                    // pattern="\d*"
                    autoComplete="off"
                    onChange={this.handleChangeFor("cin")}
                    value={this.state.member.cin}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="sexe" className="block mb-1">
                    Genre
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300 py-2 px-2 focus:outline-none rounded w-full block"
                    id="sexe"
                    autoComplete="off"
                    onChange={this.handleChangeFor("sexe")}
                    value={this.state.member.sexe}
                  >
                    <option>choisissez</option>
                    <option value="Masculin">Masculin</option>
                    <option value="Féminin">Féminin</option>
                  </select>
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="type" className="block mb-1">
                    Type Adhérent
                    <span className="text-red-500">*</span>
                  </label> 
                  <select
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300 py-2 px-2 focus:outline-none rounded w-full block"
                    id="type"
                    autoComplete="off"
                    onChange={this.handleChangeFor("type")}
                    value={this.state.member.type}
                  >
                    <option>choisissez</option>
                    <option value="Président">Président(e)</option>
                    <option value="Vice Président">Vice Président(e) </option>
                    <option value="Directeur(rice) Executif">
                      Directeur(rice) Executif(ve){" "}
                    </option>
                    <option value="Trésorier(e)">Trésorier(e) </option>
                    <option value="Simple Membre">Simple Membre </option>
                  </select>
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="code" className="block mb-1">
                    Code Adhérent
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    disabled
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="code"
                    autoComplete="off"
                    onChange={this.handleChangeFor("code")}
                    value={this.state.member.codeMember}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="birthDate" className="block mb-1">
                    Date de naissance
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="date"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="birthDate"
                    autoComplete="off"
                    onChange={this.handleChangeFor("birthDate")}
                    value={this.state.member.birthDate}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="joiningDate" className="block mb-1">
                    Date d'adhésion
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="date"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="joiningDate"
                    autoComplete="off"
                    onChange={this.handleChangeFor("joiningDate")}
                    value={this.state.member.joiningDate}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="birthPlace" className="block mb-1">
                    Déposez un fichier
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    // required
                    type="file"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="image"
                    autoComplete="off"
                    onChange={this.onChangeHandler}
                    // onChange={this.handleChangeFor("birthPlace")}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="birthPlace" className="block mb-1">
                    Email
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="email"
                    autoComplete="off"
                    onChange={this.handleChangeFor("email")}
                    value={this.state.member.email}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="telephone" className="block mb-1">
                    Telephone
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    // pattern="\d*"
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="telephone"
                    autoComplete="off"
                    onChange={this.handleChangeFor("telephone")}
                    value={this.state.member.telephone}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="birthPlace" className="block mb-1">
                    Code Strcuture
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    disabled
                    type="text"
                    className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                    id="codeStructure"
                    autoComplete="off"
                    onChange={this.handleChangeFor("codeStructure")}
                    value={this.state.member.codeStructure}
                  />
                </div>

                <div className="mb-4 w-64">
                  <label htmlFor="codeCommission" className="block mb-1">
                    Code Commission
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    type="text"
                    className="bg-gray-100 border border-blue-300 py-2 px-2 focus:outline-none rounded w-full block"
                    id="codeCommission"
                    autoComplete="off"
                    onChange={this.handleChangeFor("codeCommission")}
                    value={this.state.member.codeCommission}
                  >
                    <option>choisir</option>
                    <option value="Enseignement, sciences et technologie">
                      Enseignement, sciences et technologie{" "}
                    </option>
                    <option value="Développement économique et emploi">
                      Développement économique et emploi
                    </option>
                    <option value="Social et santé ">Social et santé </option>
                    <option value="Culture, tourisme et environnement ">
                      Culture, tourisme et environnement{" "}
                    </option>
                  </select>
                </div>
              </div>
              <div className=" w-full">
                <label htmlFor="observation" className="block mb-1">
                  Observation
                </label>
                <textarea
                  required
                  className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                  id="observation"
                  autoComplete="off"
                  onChange={this.handleChangeFor("observation")}
                  value={this.state.member.observation}
                />
              </div>
              <div className="flex items-center py-8">
                <button
                  onClick={this.closeModal}
                  type="reset"
                  className="bg-red-400 px-6 py-3 rounded text-white mr-8"
                >
                  Fermer
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 px-6 py-3 rounded text-white"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  member: state.member,
  members: state.members,
});

const mapDispatchToProps = (dispatch) => ({
  addMember: (data) => dispatch(addMember(data)),
  getMembers: () =>dispatch(getMembers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

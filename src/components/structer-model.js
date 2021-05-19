import React from "react";
import { connect } from "react-redux";
import { addStructer } from "../actions/structerAction";
import Dropdown from "./dropdown";


class  StructerModal extends React.Component {
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
                    SectorStruct : "",
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
                   
    
                }
            };

            this.handleChangeFor = this.handleChangeFor.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
     
    //   static propTypes = {
    //     getMembers: PropTypes.func.isRequired,
    //     members: PropTypes.object.isRequired,
    //   }

     /** callback for passing data from child to parent component it will be passed as aprop */
    handleCallback = (childData) =>{
        const { structer } = this.state;
        const structerDetails = {
        ...structer,
        DelegStruct: childData.gouvernerat.name,
        GouvStruct: childData.delegation.name,
        SectorStruct: childData.secteur.name,
        CodeStruct: `${childData.gouvernerat.code}${childData.delegation.code}${childData.secteur.code}`,
        };
        this.setState({ structer: structerDetails }, () => {
        console.log(this.state)
        });
        console.log(childData)
        this.setState()
    }
    closeModal = () => {
        this.props.parentCallback('')
     }
    handleChangeFor = (propertyName) => (event) => {
    const { structer } = this.state;
    const structerDetails = {
        ...structer,
        [propertyName]: event.target.value,
    };
    this.setState({ structer: structerDetails });
    };
    
      handleSubmit(event) {
        event.preventDefault();
        console.log("test ", this.state.structer)
        this.props.addStructer(this.state.structer);
         
      }

      render() {

        return (
            <div className="h-screen overflow-scroll py-8">
                <div className="absolute z-40 w-full top-0 left-0 h-full bg-gray-900 bg-opacity-50">

                </div>
                <div className="relative z-40 bg-white shadow-2xl rounded-lg -mt-2">
                        <h2 className="text-2xl bg-green-300 text-gray-800 px-4 py-4 rounded-t-lg uppercase"> Ajouter un nouveau Structure</h2>
                        <div className="px-4 py-4 text-lg tracking-wider leading-loose">

                            <form ref={(el) => this.myFormRef = el} onSubmit={this.handleSubmit}>
                                <Dropdown parentCallback = {this.handleCallback}/> 
                                <div className="grid-cols-3 grid gap-4">

                                    <div className="mb-4 w-64">
                                        <label htmlFor="firstName" className="block mb-1">
                                        Code Structure :
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
                                        id="CodeStruct"
                                        autoComplete="off"
                                        // onChange={this.handleChangeFor('CodeStruct')}
                                        value={this.state.structer.CodeStruct}
                                        disabled
                                        />
                                    </div>  
                                    <div className="mb-4 w-64">
                                        <label htmlFor="sexe" className="block mb-1">
                                        Type Structure:
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-2 px-2 focus:outline-none rounded w-full block"
                                        id="type-struct"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('TypeStruct')} 
                                        value={this.state.structer.TypeStruct}
                                        >
                                            <option >--choisissez--</option>
                                            <option value="National">National</option>
                                            <option value="regional">Régional</option>
                                            <option value="Local">Local</option>
                                        </select>
                                    </div>

                                    <div className="mb-4 w-64">
                                        <label htmlFor="DateCrea" className="block mb-1">
                                            Date Creation
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="date"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="DateCrea"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('DateCrea')}
                                        value={this.state.structer.DateCrea}
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
                                        <label htmlFor="MatriFisc" className="block mb-1">
                                        Matricule Fiscale
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="MatriFisc"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('MatriFisc')}
                                        value={this.state.structer.MatriFisc}
                                        />
                                    </div>  
                                    <div className="mb-4 w-64">
                                        <label htmlFor="JortCreation" className="block mb-1">
                                        JORT Création
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="JortCreation"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('JortCreation')}
                                        value={this.state.structer.JortCreation}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="Numccptebq" className="block mb-1">
                                        Numéro compte bancaire
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="Numccptebq"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('Numccptebq')}
                                        value={this.state.structer.Numccptebq}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="CodePresident" className="block mb-1">
                                        Code Président
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="CodePresident"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('CodePresident')}
                                        value={this.state.structer.CodePresident}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="nomPresident" className="block mb-1">
                                        Nom Président
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="nomPresident"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('nomPresident')}
                                        value={this.state.structer.nomPresident}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="CodeDirEx" className="block mb-1">
                                        Code Directeur Executif
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="CodeDirEx"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('CodeDirEx')}
                                        value={this.state.structer.CodeDirEx}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="nomDirEx" className="block mb-1">
                                        Nom Directeur Executif
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="nomDirEx"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('nomDirEx')}
                                        value={this.state.structer.nomDirEx}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="CodeTresor" className="block mb-1">
                                        Code Trésorier
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="CodeTresor"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('CodeTresor')}
                                        value={this.state.structer.CodeTresor}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="nomTresor" className="block mb-1">
                                        Nom Trésorier
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="nomTresor"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('nomTresor')}
                                        value={this.state.structer.nomTresor}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="CodeVicePresident" className="block mb-1">
                                        Code vice président
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="CodeVicePresident"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('CodeVicePresident')}
                                        value={this.state.structer.CodeVicePresident}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="nomVice" className="block mb-1">
                                        Nom vice président
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="nomVice"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('nomVice')}
                                        value={this.state.structer.nomVice}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="codeMembreBur" className="block mb-1">
                                        Code Membre Bureau
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="codeMembreBur"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('codeMembreBur')}
                                        value={this.state.structer.codeMembreBur}
                                        />
                                    </div> 
                                    <div className="mb-4 w-64">
                                        <label htmlFor="nomMembreBureau" className="block mb-1">
                                        Nom Membre Bureau
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        required
                                        type="text"
                                        className="bg-gray-100 border border-blue-300 py-px px-2 focus:outline-none rounded w-full block"
                                        id="nomMembreBureau"
                                        // pattern="\d*"
                                        autoComplete="off"
                                        onChange={this.handleChangeFor('nomMembreBureau')}
                                        value={this.state.structer.nomMembreBureau}
                                        />
                                    </div> 
                                     
                                    
                                </div>
                                
                                <div className="flex items-center py-8">
                                <button onClick={this.closeModal} type="reset" className="bg-red-400 px-6 py-3 rounded text-white mr-8">
                                    Fermer
                                </button>
                                <button type="submit" className="bg-indigo-600 px-6 py-3 rounded text-white">
                                    Ajouter
                                </button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        )
      }
}

const mapStateToProps = (state) => ({
    structer: state.structer
})

const mapDispatchToProps = (dispatch) => ({
    addStructer: (data) => dispatch(addStructer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(StructerModal);
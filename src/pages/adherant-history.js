import React from 'react';
import FlashC from '../components/flash';
import history from "../history";
import HistoryDataTable from '../components/history-datatable';
import Modal from '../components/modal'

class AdherantHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHideModal : false,
        };
    }
    historyAD(){
        history.push("/member/history");
    }
    handleModalShowHide() {
        this.setState({ showHideModal: !this.state.showHideModal })
    }
    handleCallback = () => { 
        this.setState({ showHideModal: !this.state.showHideModal });
    }
    render() {
        let className = 'hidden z-50 fixed top-0 left-0 w-full h-screen';
        if (this.state.showHideModal) {
            className = 'z-50 fixed top-0 left-0 w-full h-screen';
        }
        return (
            <div className="px-4 py-4 max-w-7xl mx-auto">
                {/* <FlashC /> */}
                <div className={className}>
                    <div className="max-w-4xl mx-auto">

                        <Modal parentCallback = {this.handleCallback} />
                    </div>
                </div>
                <h3 className="text-3xl mb-8">Liste des Adhérants</h3>
                <div className="flex items-center justify-end">
                    <div>

                        <button onClick={() => this.historyAD()} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 mr-4">
            
                            Historique Adherants
                        </button>
                        <button  onClick={() => this.handleModalShowHide()} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 ">
            
                            Ajouter Nouvelle Adherants
                        </button>
                    </div>
                </div>
                <HistoryDataTable />
            </div>

        )
    }
}

export default AdherantHistory;
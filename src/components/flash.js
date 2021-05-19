import React from 'react';
import { CheckmarkDoneCircle } from 'react-ionicons'

const FlashC = () => (

    <div className="fixed bottom-0 right-0 p-10 z-50">
        <div className="rounded-2xl p-4 flex justify-between items-center bg-green-100">
            <div className="mr-3 flex items-center">
                <div className="mr-4">

                    <CheckmarkDoneCircle
                        color={'#34d399'}
                        height="30px"
                        width="30px"
                    />
                </div>
                <span className="text-lg">Adhérant Ajoutée avec succés</span>
            </div>
            <span 
            className="cursor-pointer block flex bg-green-400 rounded-full w-7 h-7 items-center justify-center"
            >&times;</span>
        </div>
    </div>
);

export default FlashC;
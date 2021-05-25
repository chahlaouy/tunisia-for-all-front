import React from "react";
import useToken from "../useToken";
import moment from "moment";
function Profile() {
  const { token } = useToken();
  return (
    <div>
      <div>
        <div className="">
          {/* <h2 className="text-4xl bg-green-300 text-white px-4 py-4 rounded-t-lg uppercase">
            {" "}
            {token.user.firstName}
          </h2> */}
          <div className="px-4 py-4 flex justify-between text-lg tracking-wider leading-loose">
            <div className="mr-8">
              <div className="w-56 h-72 rounded-md bg-gray-100 shadow-2xl flex items-center justify-center">
                <img
                  src={"http://localhost:3001/api/public/" + token.user.image}
                  className="w-56 h-72 rounded-md bg-cover bg-center object-cover"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <ul className="mr-8">
                <li className="py-2">
                  <strong>Nom:</strong>
                  <span>{token.user.firstName}</span>
                </li>
                <li className="py-2">
                  <strong>Prénom:</strong>
                  <span>{token.user.lastName}</span>
                </li>
                <li className="py-2">
                  <strong>Email:</strong>
                  <span>{token.user.email}</span>
                </li>
                <li className="py-2">
                  <strong>Cin:</strong>
                  <span>{token.user.cin}</span>
                </li>
                <li className="py-2">
                  <strong>Secteur:</strong>
                  <span>{token.user.secteur}</span>
                </li>

                <li className="py-4">
                  <strong>Gouvernerat:</strong>
                  <span>{token.user.gouvernerat}</span>
                </li>
                <li className="py-2">
                  <strong>Delegation:</strong>
                  <span>{token.user.delegation}</span>
                </li>
                <li className="py-2">
                  <strong>Date de naissance:</strong>
                  <span>
                    {moment(token.user.birthDate).format("MMMM Do YYYY")}
                  </span>
                </li>
                <li className="py-2">
                  <strong>Joining Date:</strong>
                  <span>
                    {moment(token.user.joiningDate).format("MMMM Do YYYY")}
                  </span>
                </li>
              </ul>

              <ul className="mr-8">
                <li className="py-2">
                  <strong>Nationalité:</strong>
                  <span>{token.user.nationality}</span>
                </li>
                <li className="py-2">
                  <strong>Profession:</strong>
                  <span>{token.user.profession}</span>
                </li>
                <li className="py-2">
                  <strong>Genre:</strong>
                  <span>{token.user.sexe}</span>
                </li>
                <li className="py-2">
                  <strong>Télephone:</strong>
                  <span>{token.user.telephone}</span>
                </li>
                <li className="py-2">
                  <strong>Type:</strong>
                  <span>{token.user.type}</span>
                </li>
                <li className="py-2">
                  <strong>Email:</strong>
                  <span>{token.user.email}</span>
                </li>
                <li className="py-2">
                  <strong>Code Membre:</strong>
                  <span>{token.user.codeMember}</span>
                </li>
                <li className="py-2">
                  <strong>Code Structure:</strong>
                  <span>{token.user.codeStructure}</span>
                </li>
              </ul>
              <ul>
                <li className="py-2">
                  <strong>Code Commission:</strong>
                  <span>{token.user.codeCommission}</span>
                </li>
                <li className="py-2">
                  <strong>Observation:</strong>
                  <span>{token.user.observation}</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;

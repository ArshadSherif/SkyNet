// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract FileStorage {
    //custom data structure to store file details
    struct File{
        string name;
        string cid;
    }
    // mapping to store user files
//     This mapping stores an array of File structs for each user (address).
// The key is the user's blockchain address (address).
// The value is an array of files (File[]) associated with that address.
    mapping(address => File[]) private userFiles;


// event: Logs information about a specific action on the blockchain, making it easy to track and query.
// Purpose: Emit a log entry every time a file is uploaded. It records:
// user: The address of the user who uploaded the file.
// name: The name of the uploaded file.
// cid: The CID of the file on IPFS.
// indexed: Allows filtering and querying by the user field in external tools like block explorers.

    event FileUploaded(address indexed user, string name, string cid);

    function uploadFile(string memory _name, string memory _cid) public {
        userFiles[msg.sender].push(File(_name, _cid));
        emit FileUploaded(msg.sender, _name, _cid);
    }

function getFiles(address user) public view returns (File[] memory) {
    return userFiles[user];
}

}

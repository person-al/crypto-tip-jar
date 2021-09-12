import React, { useState } from 'react';
import {Button, Modal} from 'bootstrap-4-react';
// import Modal from 'react-bootstrap/Modal';

const Web3 = require("web3");
const Units = require("ethereumjs-units");
const BN = require("bn.js");


const JAR_OWNER_ACCOUNT = "0x25a32F027F717EE51a023cfC8CfF41879cB428cc";

function TipJar() {
	const [showModal, setShowModal] = useState(false);
	const [accounts, setAccounts] = useState([]);
	const [metaMaskConnected, setMetaMaskConnected] = useState(false);
	const [tipAmount, setTipAmount] = useState();

  	const handleClose = () => setShowModal(false);
  	const handleShow = () => setShowModal(true);

	const ethEnabled = async () => {
	  if (window.ethereum) {
	      var accountList = await window.ethereum.request({ method: 'eth_requestAccounts' });
	      setAccounts(accountList)
	      window.web3 = new Web3(window.ethereum);
	      setMetaMaskConnected(true);
	  }
	  setMetaMaskConnected(false);
	}

	const sendTip = (numEth) => {
		if (!window.ethereum || accounts.length <= 1) {
			return
		}

		var valString = Units.convert(numEth.toString(), 'eth', 'wei')
		var hexValue = new BN(valString, 10)
		window.ethereum.request({
		  method: 'eth_sendTransaction',
		  params: [
		    {
		      from: accounts[0],
		      to: JAR_OWNER_ACCOUNT,
		      value: hexValue.toString(16),
		    },
		  ],
		})
		.then((txHash) => console.log(txHash))
		.catch((error) => console.error);
	};

	const initateTip = () => {
		// First ask tip amount and clarify tokens accepted
		// Check to see if MetaMask is connected
		// If not, try to connect it and grab the account
		// If connected, try to send tip
	}

	const renderTipModal = () => {
		return (
		<Modal id="tipModal" fade>
          <Modal.Dialog>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                Modal body text goes here.
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Close</Button>
                <Button primary>Save changes</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
		);
	}

	return (
      <div>
        {/* Button trigger Modal */}
        <Button primary data-toggle="modal" data-target="#tipModal">Send a tip!</Button>
        {renderTipModal()}
	</div>
        
    );

}

export default TipJar;
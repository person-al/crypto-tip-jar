# Crypto Tip Jar
## Privacy Policy
_Our policy is to keep as much of your data private as possible._
- The tip jar is designed to be a frontend javascript only library. Because of this, all personal data stays on your device unless you are sending it to the blockchain.
- Data sent to the blockchain (varies by blockchain):
	- address you're sending from
	- address you're sending to
	- amount you sent
	- memo field with the following string:
		- "this tip was sent using the CryptoTipJar"
- Data sent to CryptoTipJar contributors:
	- none
**That said,** it is important to note that any website that uses CryptoTipJar may be running their own code with its own privacy policy.
## Goals
- Allow website developers to place an easy-to-use crypto tip jar on a website.
- Allow website visitors to quickly and easily tip creators in crypto using tokens of their choice.
## Proposed UX
1. Tip Jar button anyone can display on their website. Website developer must hard-code public addresses for tip jar.
2. Customer clicks on button
3. Menu pops up listing accepted currencies and allowing user to select wallet (start with just MetaMask and maybe Ledger - all ETH and ERC20 tokens supported by default)
4. Clicking on wallet opens transaction UI for that wallet. Customer can select amount they want to tip and complete transaction.
5. (Optional) customer can receive special code in exchange for tip, this allows them to unlock a paywall.
## Developer Tasks
- [ ] create javascript function that interacts with Metamask wallet
- [ ] modify function to pre-fill a transaction or pre-fill a wallet address
	- open questions: the user should be able to select which token they're sending, but the recipient address should be pre-filled. Is that possible?
	- does MetaMask allow sending memos on a transaction?
- [ ] create an html button with attached javascript that triggers Metamask function
	- The Web3 library requires node, so a React component seems like a reasonable start for the button, though something in pure javascript is going to be more compatible with anyone's code.
- [ ] create clear space for developer to hardcode recipient address and accepted tokens
	- Does MetaMask allow pre-filling of token? Does it allow prevention of tokens? In theory, you can't _stop_ someone from sending you a token on the blockchain. So maybe it's fine to make the right thing as easy as possible and not work too hard to prevent the "wrong" thing.
- [ ] create a customizable language around the button (either a label or a pop-up) that details which wallets are supported and which tokens the creator supports
- [ ] integrate with Ledger as well as Metamask
- [ ] get feedback from potential customers

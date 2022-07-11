import * as solana from '@solana/web3.js';
import React, {useEffect, useState} from 'react';
import {Button, Text, ToastAndroid, View} from 'react-native';
import {AccountSelect, Balance, Messages, NetworkSelect, Section} from '../components';
import {useAccounts, useConnections} from '../providers';



export const Wallet = () => {


  const {selectedAccount} = useAccounts();
  const {connection, selectedNetwork} = useConnections();


  const [message, setMessages] = useState<any>();
  const [balance, setBalance] = useState<any>();

  const programIdString: String = "3qKUMYEjXm9sKMezDvex9r9jLbMUsuke8K1zTf81dyHa";
  const programId:solana.PublicKey = new solana.PublicKey(programIdString);

  const config = {
//filters: [{ dataSize: 1, keys: [programId] }],
//encoding: 'jsonParsed',
};
const getMessages = () => {
  if (!connection || !selectedAccount) return;
  setMessages(null);
    connection
    .getParsedProgramAccounts(programId, config)
    .then(
      
      res => {
        setMessages("accountData");

          // res.forEach(account => {
          //   let accountData: String = account.account.data.toString();
          //   console.log(accountData);
          //   setMessages(accountData);
          //       });

  })
    .catch(err => console.log(err));
    
};




  const getBalance = () => {
    if (!connection || !selectedAccount) return;
    console.log(`Get balance for ${selectedAccount.publicKey.toBase58()}`);
    setBalance(null);
    connection
      .getBalance(selectedAccount.publicKey)
      .then(res => setBalance(String(res / solana.LAMPORTS_PER_SOL)))
      .catch(err => console.log(err));
  };
  



  const getAirdrop = () => {
    if (!connection || !selectedAccount) return;
    connection
      .requestAirdrop(selectedAccount.publicKey, 3 * solana.LAMPORTS_PER_SOL)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (balance || !connection) return;
    getBalance();
  }, [balance, getBalance, connection]);

  useEffect(() => {
    if (!connection || !message) return;
    getMessages();
  }, [message, getMessages, connection]);





  return (


    <View>
      <NetworkSelect />
      <AccountSelect />
      {selectedAccount ? (
        <View>
          <Section title="Balance">
            {balance ? (
              <Balance balance={balance} symbol="SOL" decimals={10} />
            ) : (
              <Text>Fetching balance.</Text>
            )}
          </Section>
          <Section title="Message">
            {message ? (
              <Messages message={message} />

            ) : (
              <Text>Fetching message.</Text>
            )}
          </Section>
          <Section title="Actions">
            
            <Button title="Refresh Balance" onPress={getBalance}/>
            <Button title="Read data of accounts" onPress={getMessages}/>
              
            <Text>
               {"\n\n"}</Text>

            <Button
              disabled={selectedNetwork?.endpoint === 'mainnet-beta'}
              title="Airdrop"
              onPress={getAirdrop}
            />
          </Section>
        </View>
      ) : (
        <Section title="Select or Create Account" />
      )}
    </View>
  );
};
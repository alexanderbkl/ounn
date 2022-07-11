import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { getPhantomWallet, PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { Home } from "./Home";

const wallets = [PhantomWalletAdapter()];
const endPoint = "http://127.0.0.1:8899";

const App = () => {
  return (
    <ConnectionProvider endpoint={endPoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <Home />
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
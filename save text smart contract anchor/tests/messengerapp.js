var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as anchor from '@project-serum/anchor';
import * as assert from 'assert';
const { SystemProgram } = anchor.web3;
describe("Testing our messaging app: ", function () {
    //const provider = anchor.Provider.env();
    //anchor.setProvider(provider);
    const program = anchor.workspace.Messengerapp;
    const baseAccount = "BaKLosaUNBcR1ja9fKg1Dg3wmzcaXwVPhCLVytVhcs7n";
    /*
      it("An account is initialized", async function () {
        await program.rpc.initialize("My first message", {
          accounts: {
            baseAccount: baseAccount.publicKey,
            user: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
          },
          signers: [baseAccount]
        });
        const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
        console.log('Data: ', account.data);
        assert.ok(account.data === "My first message");
      });
    */
    it("Update the account previously created: ", function () {
        return __awaiter(this, void 0, void 0, function* () {
            /*await program.rpc.update("My third message", {
              accounts: {
                baseAccount: baseAccount.publicKey,
              },
            });*/
            const account = yield program.account.baseAccount.fetch(baseAccount);
            console.log("Updated data: ", account.data);
            assert.ok(account.data === "My third message");
            console.log("All account data: ", account);
            console.log("All data: ", account.dataList);
            assert.ok(account.dataList.length === 2);
        });
    });
});

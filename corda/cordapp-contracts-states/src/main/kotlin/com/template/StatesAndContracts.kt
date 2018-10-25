package com.template

import net.corda.core.contracts.CommandData
import net.corda.core.contracts.Contract
import net.corda.core.contracts.ContractState
import net.corda.core.identity.AbstractParty
import net.corda.core.transactions.LedgerTransaction

    // Start Policy
    // Paid Premium
    // End Policy


// *****************
// * Contract Code *
// *****************
class ADDContract : Contract {
    // This is used to identify our contract when building a transaction
    companion object {
        val ID = "com.template.ADDContract"
    }
    // A transaction is considered valid if the verify() function of the contract of each of the transaction's input
    // and output states does not throw an exception.
    override fun verify(tx: LedgerTransaction) {
        val state = tx.inputStates[0] as ADDState

        if     (!state.current_status.equals("APPLIED") &&
                !state.current_status.equals("STARTED") &&
                !state.current_status.equals("ENDED")){
            throw Exception("Invalid State :" + state.current_status)
        }
    }

    // Used to indicate the transaction's intent.
    interface Commands : CommandData {
        class Action : Commands
    }
}

// *********
// * State *
// *********
data class ADDState(val data: String) : ContractState {
    override val participants: List<AbstractParty> = listOf()
    val current_status: String = ""
    val policy_holder_name: String = ""
    val policy_holder_address: String = ""
}
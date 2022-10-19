import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import { AttestationDeleted as AttestationDeletedEvent } from "../generated/AttestationsRegistry/AttestationsRegistry"
import { handleAttestationDeleted } from "../src/attestations-registry"
import { createAttestationDeletedEvent } from "./attestations-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let attestation = new ethereum.Tuple();
    // attestation.push("0x8f4c102875AFb6152004f8e87cF1cBF90431Df54" as unknown as ethereum.Value) 
    // attestation.push("1" as unknown as ethereum.Value) 
    // attestation.push("1664891179" as unknown as ethereum.Value) 
    // attestation.push("0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000633c390e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000086964656e746974790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006676974687562000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002438613530636633642d653232312d346132662d396339352d3165383035383132306665320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000087069636f31393737000000000000000000000000000000000000000000000000" as unknown as ethereum.Value) 
    // let calldata = new ethereum.Value()
    // calldata.
    // ethereum.encode()
    let newAttestationDeletedEvent = createAttestationDeletedEvent(attestation)
    handleAttestationDeleted(newAttestationDeletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AttestationDeleted created and stored", () => {
    assert.entityCount("AttestationDeleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AttestationDeleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attestation",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

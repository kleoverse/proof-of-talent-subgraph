import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AttestationDeleted,
  AttestationRecorded,
  IssuerAuthorized,
  IssuerUnauthorized,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/AttestationsRegistry/AttestationsRegistry"

export function createAttestationDeletedEvent(
  attestation: ethereum.Tuple
): AttestationDeleted {
  let attestationDeletedEvent = changetype<AttestationDeleted>(newMockEvent())

  attestationDeletedEvent.parameters = new Array()

  attestationDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "attestation",
      ethereum.Value.fromTuple(attestation)
    )
  )

  return attestationDeletedEvent
}

export function createAttestationRecordedEvent(
  attestation: ethereum.Tuple
): AttestationRecorded {
  let attestationRecordedEvent = changetype<AttestationRecorded>(newMockEvent())

  attestationRecordedEvent.parameters = new Array()

  attestationRecordedEvent.parameters.push(
    new ethereum.EventParam(
      "attestation",
      ethereum.Value.fromTuple(attestation)
    )
  )

  return attestationRecordedEvent
}

// export function createIssuerAuthorizedEvent(
//   issuer: Address,
//   firstCollectionId: BigInt,
//   lastCollectionId: BigInt
// ): IssuerAuthorized {
//   let issuerAuthorizedEvent = changetype<IssuerAuthorized>(newMockEvent())

//   issuerAuthorizedEvent.parameters = new Array()

//   issuerAuthorizedEvent.parameters.push(
//     new ethereum.EventParam("issuer", ethereum.Value.fromAddress(issuer))
//   )
//   issuerAuthorizedEvent.parameters.push(
//     new ethereum.EventParam(
//       "firstCollectionId",
//       ethereum.Value.fromUnsignedBigInt(firstCollectionId)
//     )
//   )
//   issuerAuthorizedEvent.parameters.push(
//     new ethereum.EventParam(
//       "lastCollectionId",
//       ethereum.Value.fromUnsignedBigInt(lastCollectionId)
//     )
//   )

//   return issuerAuthorizedEvent
// }

// export function createIssuerUnauthorizedEvent(
//   issuer: Address,
//   firstCollectionId: BigInt,
//   lastCollectionId: BigInt
// ): IssuerUnauthorized {
//   let issuerUnauthorizedEvent = changetype<IssuerUnauthorized>(newMockEvent())

//   issuerUnauthorizedEvent.parameters = new Array()

//   issuerUnauthorizedEvent.parameters.push(
//     new ethereum.EventParam("issuer", ethereum.Value.fromAddress(issuer))
//   )
//   issuerUnauthorizedEvent.parameters.push(
//     new ethereum.EventParam(
//       "firstCollectionId",
//       ethereum.Value.fromUnsignedBigInt(firstCollectionId)
//     )
//   )
//   issuerUnauthorizedEvent.parameters.push(
//     new ethereum.EventParam(
//       "lastCollectionId",
//       ethereum.Value.fromUnsignedBigInt(lastCollectionId)
//     )
//   )

//   return issuerUnauthorizedEvent
// }

import { BigInt, ethereum, store } from "@graphprotocol/graph-ts";
import {
  AttestationDeleted as AttestationDeletedEvent,
  AttestationRecorded as AttestationRecordedEvent,
  IssuerAuthorized as IssuerAuthorizedEvent,
  IssuerUnauthorized as IssuerUnauthorizedEvent,
} from "../generated/AttestationsRegistry/AttestationsRegistry";
import { Badge, IdentityBadgeData, User, UserBadge } from "../generated/schema";

export function handleAttestationDeleted(event: AttestationDeletedEvent): void {
  let userEntity = User.load(event.params.attestation.owner.toHex());
  let badgeEntity = Badge.load(
    event.params.attestation.collectionId.toString()
  );
  let userBadgeId = event.params.attestation.owner
    .toHex()
    .concat(event.params.attestation.collectionId.toString());
  let userBadgeEntity = UserBadge.load(userBadgeId);
  if (userBadgeEntity) {
    store.remove("UserBadge", userBadgeEntity.id);
    userEntity!.badgesCount = userEntity!.badgesCount.minus(BigInt.fromI32(1));
    userEntity!.save();
    badgeEntity!.claimersCount = badgeEntity!.claimersCount.minus(BigInt.fromI32(1));
    badgeEntity!.save();
  }
}

export function handleAttestationRecorded(
  event: AttestationRecordedEvent
): void {
  // Check if user entity exists if not create a new one
  // Check if badge entity exists if not create a new one
  // Check if userBadge entity exists if not create a new one or else update existing

  const decodedExtraData = ethereum.decode("(uint128,uint32,string,string,bytes)",event.params.attestation.extraData);
  let decodedExtraDataTuple =  new ethereum.Tuple();
  if (decodedExtraData) {
    decodedExtraDataTuple = decodedExtraData.toTuple();
  }

  if (!decodedExtraDataTuple) {
    return;
  }

  let userEntity = User.load(event.params.attestation.owner.toHex());
  if (!userEntity) {
    userEntity = new User(event.params.attestation.owner.toHex());
    userEntity.badgesCount = BigInt.fromI32(0);
  }
  userEntity.address = event.params.attestation.owner;
  userEntity.save();

  let badgeEntity = Badge.load(
    event.params.attestation.collectionId.toString()
  );
  if (!badgeEntity) {
    badgeEntity = new Badge(event.params.attestation.collectionId.toString());
    badgeEntity.claimersCount = BigInt.fromI32(0);
  }
  badgeEntity.collectionId = event.params.attestation.collectionId;
  badgeEntity.issuer = event.params.attestation.issuer;
  badgeEntity.type = decodedExtraDataTuple[2].toString().toUpperCase();
  badgeEntity.source = decodedExtraDataTuple[3].toString();
  badgeEntity.save();

  let userBadgeEntity = UserBadge.load(userEntity.id.concat(badgeEntity.id));
  if (!userBadgeEntity) {
    userBadgeEntity = new UserBadge(userEntity.id.concat(badgeEntity.id));
    userEntity.badgesCount = userEntity.badgesCount.plus(BigInt.fromI32(1));
    userEntity.save();
    badgeEntity.claimersCount = badgeEntity.claimersCount.plus(BigInt.fromI32(1));
    badgeEntity.save();
  }
  userBadgeEntity.user = userEntity.id;
  userBadgeEntity.badge = badgeEntity.id;
  userBadgeEntity.value = event.params.attestation.value;
  userBadgeEntity.timestamp = event.params.attestation.timestamp;
  userBadgeEntity.save();

  if (badgeEntity.type == "IDENTITY") {
    let decodedIdentityBadgeData = ethereum.decode("(string,string)", decodedExtraDataTuple[4].toBytes());
    let decodedIdentityBadgeDataTuple = new ethereum.Tuple();
    if (decodedIdentityBadgeData) {
      decodedIdentityBadgeDataTuple = decodedIdentityBadgeData.toTuple();
    }

    let identityBadgeDataEntity = IdentityBadgeData.load(userBadgeEntity.id);
    if (!identityBadgeDataEntity) {
      identityBadgeDataEntity = new IdentityBadgeData(userBadgeEntity.id);
    }
    if (decodedIdentityBadgeDataTuple) {
      identityBadgeDataEntity.accountId = decodedIdentityBadgeDataTuple[0].toString();
      identityBadgeDataEntity.username = decodedIdentityBadgeDataTuple[1].toString();
      identityBadgeDataEntity.userBadge = userBadgeEntity.id;
      identityBadgeDataEntity.save();
    }
  }
}

export function handleIssuerAuthorized(event: IssuerAuthorizedEvent): void {
  // let entity = new IssuerAuthorized(
  //   event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  // )
  // entity.issuer = event.params.issuer
  // entity.firstCollectionId = event.params.firstCollectionId
  // entity.lastCollectionId = event.params.lastCollectionId
  // entity.save()
}

export function handleIssuerUnauthorized(event: IssuerUnauthorizedEvent): void {
  // let entity = new IssuerUnauthorized(
  //   event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  // )
  // entity.issuer = event.params.issuer
  // entity.firstCollectionId = event.params.firstCollectionId
  // entity.lastCollectionId = event.params.lastCollectionId
  // entity.save()
}

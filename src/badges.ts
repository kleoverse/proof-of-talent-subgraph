import {
  ApprovalForAll as ApprovalForAllEvent,
  Badges,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/Badges/Badges"
import { Badge } from "../generated/schema"

export function handleTransferSingle(event: TransferSingleEvent): void {
  let badgeEntity = Badge.load(
    event.params.id.toString()
  );
  if (!badgeEntity) {
    badgeEntity = new Badge(event.params.id.toString());
  }
  let BadgesContract = Badges.bind(event.address);
  const uri = BadgesContract.uri(event.params.id);
  badgeEntity.uri = uri.replace("{id}", event.params.id.toString());
  badgeEntity.collectionId = event.params.id;
  badgeEntity.save();
}

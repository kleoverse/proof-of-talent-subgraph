// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get badges(): Array<string> | null {
    let value = this.get("badges");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set badges(value: Array<string> | null) {
    if (!value) {
      this.unset("badges");
    } else {
      this.set("badges", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Badge extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Badge entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Badge must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Badge", id.toString(), this);
    }
  }

  static load(id: string): Badge | null {
    return changetype<Badge | null>(store.get("Badge", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collectionId(): BigInt {
    let value = this.get("collectionId");
    return value!.toBigInt();
  }

  set collectionId(value: BigInt) {
    this.set("collectionId", Value.fromBigInt(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get issuer(): Bytes | null {
    let value = this.get("issuer");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set issuer(value: Bytes | null) {
    if (!value) {
      this.unset("issuer");
    } else {
      this.set("issuer", Value.fromBytes(<Bytes>value));
    }
  }

  get type(): string | null {
    let value = this.get("type");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set type(value: string | null) {
    if (!value) {
      this.unset("type");
    } else {
      this.set("type", Value.fromString(<string>value));
    }
  }

  get source(): string | null {
    let value = this.get("source");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set source(value: string | null) {
    if (!value) {
      this.unset("source");
    } else {
      this.set("source", Value.fromString(<string>value));
    }
  }

  get claimers(): Array<string> | null {
    let value = this.get("claimers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set claimers(value: Array<string> | null) {
    if (!value) {
      this.unset("claimers");
    } else {
      this.set("claimers", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class UserBadge extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserBadge entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserBadge must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserBadge", id.toString(), this);
    }
  }

  static load(id: string): UserBadge | null {
    return changetype<UserBadge | null>(store.get("UserBadge", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get badge(): string {
    let value = this.get("badge");
    return value!.toString();
  }

  set badge(value: string) {
    this.set("badge", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get identityBadgeData(): string | null {
    let value = this.get("identityBadgeData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set identityBadgeData(value: string | null) {
    if (!value) {
      this.unset("identityBadgeData");
    } else {
      this.set("identityBadgeData", Value.fromString(<string>value));
    }
  }
}

export class IdentityBadgeData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IdentityBadgeData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type IdentityBadgeData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("IdentityBadgeData", id.toString(), this);
    }
  }

  static load(id: string): IdentityBadgeData | null {
    return changetype<IdentityBadgeData | null>(
      store.get("IdentityBadgeData", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accountId(): string {
    let value = this.get("accountId");
    return value!.toString();
  }

  set accountId(value: string) {
    this.set("accountId", Value.fromString(value));
  }

  get username(): string {
    let value = this.get("username");
    return value!.toString();
  }

  set username(value: string) {
    this.set("username", Value.fromString(value));
  }

  get userBadge(): string {
    let value = this.get("userBadge");
    return value!.toString();
  }

  set userBadge(value: string) {
    this.set("userBadge", Value.fromString(value));
  }
}
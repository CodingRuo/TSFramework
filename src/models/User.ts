import { Model } from "./Model"
import { Attributes } from "./Attributes"
import { ApiSync } from "./ApiSync"
import { Eventing } from "./Eventing"
import { Collection } from "./Collection"

export interface UserProps {
    id?: number
    name?: string
    age?: number
}

const rootURL = "http://localhost:3000/users"

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootURL)
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootURL, (json: UserProps) => User.buildUser(json))
    }
}
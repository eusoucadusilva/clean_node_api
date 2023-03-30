import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helpers'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const accountResult = await accountCollection.findOne({ _id: result.insertedId })
    const { _id, ...accountWithId } = accountResult
    const dataModify = {
      id:  _id.toString(),
      name: accountWithId.name,
      email: accountWithId.email,
      password: accountWithId.password
    }
    return dataModify
  }
}

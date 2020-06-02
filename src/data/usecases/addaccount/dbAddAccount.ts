import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from './dbAddAccountProtocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)
    const savedAccount = await this.addAccountRepository.add({ ...account, password: hashedPassword })

    console.log(savedAccount)

    return savedAccount
  }
}

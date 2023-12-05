import { v4 as uuidv4 } from 'uuid'

const USER_ID_KEY = 'user_id'

class UserIdentifierService {
  private getUserId(): string {
    let userId = localStorage.getItem(USER_ID_KEY)

    if (!userId) {
      userId = uuidv4()
      localStorage.setItem(USER_ID_KEY, userId)
    }

    return userId
  }

  getUserIdForAnalytics(): string {
    // You may want to customize this method based on your requirements
    return this.getUserId()
  }
}

const userIdentifierService = new UserIdentifierService()
export default userIdentifierService

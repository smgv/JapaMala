import mixpanel from 'mixpanel-browser'
import userIdentifierService from './userIdentifierService'

export const getDeviceType = () => {
  const { userAgent } = navigator
  if (/mobile/i.test(userAgent)) return 'Mobile'
  if (/iPad|Android|Touch/i.test(userAgent)) return 'Tablet'
  return 'Desktop'
}

export const getBrowserName = () => {
  const { userAgent } = navigator
  try {
    // @ts-ignore works only on brave browser
    if (navigator.brave?.isBrave()) return 'Brave'
  } catch (error) {
    console.error(error)
  }
  if (/Opera|OPR/i.test(userAgent)) return 'Opera'
  if (/Chrome/i.test(userAgent)) return 'Google Chrome'
  if (/Safari/i.test(userAgent)) return 'Safari'
  if (/Firefox/i.test(userAgent)) return 'Firefox'
  if (/Edge/i.test(userAgent)) return 'Microsoft Edge'
  return 'Special Browser'
}

export const getOSName = () => {
  const { appVersion } = navigator
  if (appVersion.indexOf('Win') !== -1) return 'Windows'
  if (appVersion.indexOf('Mac') !== -1) return 'macOS'
  if (appVersion.indexOf('X11') !== -1) return 'UNIX'
  if (appVersion.indexOf('Linux') !== -1) return 'Linux'
  return 'Special OS'
}

class MixpanelService {
  private token: string

  constructor(token: string) {
    this.token = token
    mixpanel.init(this.token)
  }

  track(eventName: string, properties?: Record<string, any>) {
    const userId = userIdentifierService.getUserIdForAnalytics()
    mixpanel.identify(`USER-ID-${userId}`)
    mixpanel.track(eventName, properties)
  }
}

const mixpanelService = new MixpanelService(import.meta.env.VITE_MIXPANEL_TOKEN)
export default mixpanelService

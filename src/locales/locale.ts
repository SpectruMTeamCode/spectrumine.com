type Server = {
  name: string
  description: string
  info: string[]
  icon: string
  url?: string
}

export interface Locale {
  name: string
  code: string

  mainPagePreview: {
    greeting: string
    toServers: string
  }

  servers: {
    SpectruMSteam: Server
    'Hardcore SMP': Server
    'Talent of the Telepath': Server
  }

  forms: {
    register: string
  }

  footer: {
    text: string
    conditionOfUse: string
    contacts: string
    rules: string
  }

  header: {
    main: string
    auth: string
    profile: string
    lang: string
    theme: string
  }

  conditionOfUse: {
    definitions: string
    conditions: [string, string[]][]
  }

  contacts: {
    messengersTitle: string
    messengers: {
      name: string
      link: string
      linkSrc: string
      iconSrc: string
    }[]
    emailsTitle: string
    emails: {
      email: string
      description: string
    }[]
  }

  rules: {
    pageTitle: string
    rules: [string, string[]][]
  }
}
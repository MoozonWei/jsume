export interface Basics {
  name: string // name
  label: string // job title
  email: string // email address
  phone: string // phone number
  url: string // website url
  summary: string // describe yourself
  location: Location // where you live
  profiles: Profile[] // social profiles
}

export interface Location {
  countryCode: string // country code, you can find it here: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  region: string
  city: string
  address: string
  postalCode: string
}

export interface Profile {
  network: string // social network name
  username: string // username
  url: string // profile url
}

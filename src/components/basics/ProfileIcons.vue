<script setup lang="ts">
// import all icons of profiles
import GitHubIcon from '~icons/mdi/github'
import LinkedInIcon from '~icons/mdi/linkedin'
import TwitterIcon from '~icons/mdi/twitter'
import FacebookIcon from '~icons/mdi/facebook'
import InstagramIcon from '~icons/mdi/instagram'
import YouTubeIcon from '~icons/mdi/youtube'
import RedditIcon from '~icons/mdi/reddit'
import StackOverflowIcon from '~icons/mdi/stack-overflow'
import CodePenIcon from '~icons/mdi/codepen'
import DevToIcon from '~icons/mdi/dev-to'
import DribbbleIcon from '~icons/mdi/dribbble'
import BehanceIcon from '~icons/mdi/behance'
import MediumIcon from '~icons/mdi/medium'
import GitLabIcon from '~icons/mdi/gitlab'
import BitbucketIcon from '~icons/mdi/bitbucket'
import TwitchIcon from '~icons/mdi/twitch'
import SpotifyIcon from '~icons/mdi/spotify'
import SoundCloudIcon from '~icons/mdi/soundcloud'
import VimeoIcon from '~icons/mdi/vimeo'
import TikTokIcon from '~icons/ic/baseline-tiktok'
import PinterestIcon from '~icons/mdi/pinterest'
import SlackIcon from '~icons/mdi/slack'
import DiscordIcon from '~icons/mdi/discord'
import TelegramIcon from '~icons/mdi/telegram'
import WeChatIcon from '~icons/mdi/wechat'
import WhatsAppIcon from '~icons/mdi/whatsapp'
import SnapchatIcon from '~icons/mdi/snapchat'
import SkypeIcon from '~icons/mdi/skype'
import MessengerIcon from '~icons/mdi/facebook-messenger'
import EmailIcon from '~icons/mdi/email'
import PhoneIcon from '~icons/mdi/phone'
import WebIcon from '~icons/mdi/web'
import LocationIcon from '~icons/mdi/map-marker'
import OtherIcon from '~icons/mdi/link'

defineProps<{
  username: string
  network: string
  url: string
}>()

const profileIcons: { [key: string]: any } = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  Reddit: RedditIcon,
  StackOverflow: StackOverflowIcon,
  CodePen: CodePenIcon,
  DevTo: DevToIcon,
  Dribbble: DribbbleIcon,
  Behance: BehanceIcon,
  Medium: MediumIcon,
  GitLab: GitLabIcon,
  Bitbucket: BitbucketIcon,
  Twitch: TwitchIcon,
  Spotify: SpotifyIcon,
  SoundCloud: SoundCloudIcon,
  Vimeo: VimeoIcon,
  TikTok: TikTokIcon,
  Pinterest: PinterestIcon,
  Slack: SlackIcon,
  Discord: DiscordIcon,
  Telegram: TelegramIcon,
  WeChat: WeChatIcon,
  WhatsApp: WhatsAppIcon,
  // Line: LineIcon,
  Snapchat: SnapchatIcon,
  Skype: SkypeIcon,
  Messenger: MessengerIcon,
  Email: EmailIcon,
  Phone: PhoneIcon,
  Web: WebIcon,
  Location: LocationIcon,
  Other: OtherIcon,
  // lowercase
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  reddit: RedditIcon,
  stackoverflow: StackOverflowIcon,
  codepen: CodePenIcon,
  devto: DevToIcon,
  dribbble: DribbbleIcon,
  behance: BehanceIcon,
  medium: MediumIcon,
  gitlab: GitLabIcon,
  bitbucket: BitbucketIcon,
  twitch: TwitchIcon,
  spotify: SpotifyIcon,
  soundcloud: SoundCloudIcon,
  vimeo: VimeoIcon,
  tiktok: TikTokIcon,
  pinterest: PinterestIcon,
  slack: SlackIcon,
  discord: DiscordIcon,
  telegram: TelegramIcon,
  wechat: WeChatIcon,
  whatsapp: WhatsAppIcon,
  snapchat: SnapchatIcon,
  skype: SkypeIcon,
  messenger: MessengerIcon,
  email: EmailIcon,
  phone: PhoneIcon,
  web: WebIcon,
  location: LocationIcon,
  other: OtherIcon,
}

const getIcon = (network: string) => {
  const icon = profileIcons[network]
  if (icon)
    return icon
  return OtherIcon
}
</script>

<template>
  <a :href="url">
    <component :is="getIcon(network)" />
  </a>
</template>

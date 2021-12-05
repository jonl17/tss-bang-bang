import React from 'react'
import LogoMain from './LogoMain'
import Pause from './Pause'
import Play from './Play'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Spotify from './Spotify'
import Ellipse from './Ellipse'
import Arrow from './Arrow'
import QuestionMark from './QuestionMark'
import MusicStaff from './MusicStaff'

export type IconType =
  | 'logo-main'
  | 'play'
  | 'pause'
  | 'facebook'
  | 'instagram'
  | 'spotify'
  | 'ellipse'
  | 'arrow'
  | 'questionMark'
  | 'musicStaff'

const AllIcons: { [key in IconType]: React.ElementType } = {
  'logo-main': LogoMain,
  play: Play,
  pause: Pause,
  facebook: Facebook,
  instagram: Instagram,
  spotify: Spotify,
  ellipse: Ellipse,
  arrow: Arrow,
  questionMark: QuestionMark,
  musicStaff: MusicStaff,
}

export { AllIcons }

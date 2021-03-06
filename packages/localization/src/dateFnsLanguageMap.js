// @flow strict

import {
  bg,
  ca,
  cs,
  da,
  de,
  el,
  enGB,
  enUS,
  es,
  fr,
  hr,
  id,
  it,
  ja,
  lt,
  he,
  hu,
  nl,
  nb,
  pl,
  pt,
  ptBR,
  ro,
  ru,
  sk,
  sr,
  fi,
  sv,
  th,
  tr,
  vi,
  uk,
  arDZ,
  ko,
  zhCN,
  zhTW,
} from 'date-fns/locale';
import type { Locale } from 'date-fns';

const LocaleMap: { [key: string]: Locale, ... } = {
  bg,
  ca,
  cs,
  da,
  de,
  at: de,
  ch: de,
  el: el,
  en: enGB,
  au: enGB,
  ee: enGB,
  hk: enGB,
  in: enGB,
  ie: enGB,
  my: enGB,
  nz: enGB,
  sg: enGB,
  za: enGB,
  ph: enGB,
  us: enUS,
  es,
  ag: es,
  cl: es,
  co: es,
  ec: es,
  pe: es,
  mx: es,
  fr,
  be: fr,
  'ca-fr': fr,
  hr,
  id,
  is: enGB,
  it,
  ja,
  lt,
  il: he,
  hu,
  nl,
  nb,
  pl,
  pt,
  br: ptBR,
  ro,
  ru,
  by: ru,
  kz: ru,
  sk,
  sr,
  fi,
  sv,
  th,
  tr,
  vn: vi,
  uk,
  ar: arDZ,
  bh: arDZ,
  jo: arDZ,
  kw: arDZ,
  om: arDZ,
  qa: arDZ,
  ae: arDZ,
  ko: ko,
  cn: zhCN,
  tw: zhTW,
};

export default LocaleMap;

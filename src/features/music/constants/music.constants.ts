type Localized = { tr: string; en: string }

type MusicTrack = { title: string; artist: string }

export type MusicGroup = {
  id: string
  title: Localized
  description: Localized
  artists: readonly string[]
  /** The song the section leads with: its video still sits on the left and opens on YouTube. */
  featured: { title: string; artist: string; youtubeId: string; image: string } | null
  tracks: readonly MusicTrack[]
  /** The group's Spotify playlist; until it is set the button shows, disabled. */
  spotifyUrl: string | null
}

/*
 * A draft: the featured songs are the user's; the track lists are suggestions to replace
 * with the user's own picks. Static on purpose, no Spotify API.
 */
export const MUSIC_GROUPS: readonly MusicGroup[] = [
  {
    id: "anatolian-rock",
    title: { tr: "Anadolu Rock", en: "Anatolian Rock" },
    description: {
      tr: "70'lerin Anadolu rock'ı ve onu bugün elektronik altyapıyla yeniden kuranlar.",
      en: "Seventies Anatolian rock, and the bands rebuilding it today with electronics."
    },
    artists: [
      "Barış Manço",
      "Cem Karaca",
      "Altın Gün",
      "Gaye Su Akyol",
      "Hey! Douglas",
      "Anatolian Psych Rock Lab",
      "Erkin Koray"
    ],
    featured: {
      title: "Gelin Ey Aşıklar",
      artist: "Anatolian Psych Rock Lab",
      youtubeId: "6aBhY2_n9m4",
      image: "/media/music/gelin-ey-asiklar.webp"
    },
    tracks: [
      { title: "Gülpembe", artist: "Barış Manço" },
      { title: "Tamirci Çırağı", artist: "Cem Karaca" },
      { title: "Goca Dünya", artist: "Altın Gün" },
      { title: "İstikrarlı Hayal Hakikattir", artist: "Gaye Su Akyol" }
    ],
    spotifyUrl: null
  },
  {
    id: "modern-independent",
    title: { tr: "Modern ve Bağımsız", en: "Modern and Independent" },
    description: {
      tr: "Kendi sesini bulmuş isimler: rap'ten sert rock'a, karanlık baladlardan bağımsız rock'a.",
      en: "Artists with a voice of their own: from rap to hard rock, dark ballads to indie rock."
    },
    artists: [
      "Hayko Cepkin",
      "Adamlar",
      "Yüzyüzeyken Konuşuruz",
      "Sagopa Kajmer",
      "Cem Adrian",
      "Büyük Ev Ablukada",
      "Duman"
    ],
    featured: {
      title: "Baytar",
      artist: "Sagopa Kajmer",
      youtubeId: "R96hqzLauaM",
      image: "/media/music/baytar.webp"
    },
    tracks: [
      { title: "Galiba", artist: "Sagopa Kajmer" },
      { title: "Rüyalarda Buruşmuşum", artist: "Adamlar" },
      { title: "Ölsem Yeridir", artist: "Yüzyüzeyken Konuşuruz" },
      { title: "Fırtınam", artist: "Hayko Cepkin" },
      { title: "Sen Benim Şarkılarımsın", artist: "Cem Adrian" }
    ],
    spotifyUrl: null
  },
  {
    id: "arabesque",
    title: { tr: "Arabesk ve Efkar", en: "Arabesque and Melancholy" },
    description: {
      tr: "Sözün ve sesin öne çıktığı, hüznü ve efkarı anlatan şarkılar.",
      en: "Songs led by words and voice, about sorrow and longing."
    },
    artists: ["Ahmet Kaya", "Müslüm Gürses", "Ferdi Tayfur"],
    featured: null,
    tracks: [
      { title: "Kum Gibi", artist: "Ahmet Kaya" },
      { title: "Nilüfer", artist: "Müslüm Gürses" },
      { title: "Bana da Söyle", artist: "Ferdi Tayfur" }
    ],
    spotifyUrl: null
  },
  {
    id: "acoustic-mystic",
    title: { tr: "Akustik ve Mistik", en: "Acoustic and Mystic" },
    description: {
      tr: "Sufi ezgiler, bendir ve geleneksel enstrümanlar; sade, içe dönük yorumlar.",
      en: "Sufi melodies, the bendir and traditional instruments; plain, inward renditions."
    },
    artists: ["Tuğba Gülyeşil", "Demircan Demir", "Ceren Gündoğdu"],
    featured: null,
    tracks: [],
    spotifyUrl: null
  }
]

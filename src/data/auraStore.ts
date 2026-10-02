/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Aura Store - Central static repository and helper schemas

export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  genre: string;
  vibes: string[];
  cozyIndex: number; // 0-100 rating for warm wood cabins
  colorFrom: string;
  colorTo: string;
  audioSynthType: 'music' | 'fireplace' | 'aura-lofi';
}

export interface MovieCast {
  name: string;
  role: string;
  photo: string;
}

export interface MovieReview {
  id: string;
  author: string;
  avatar: string;
  time: string;
  rating: number;
  text: string;
  likes: number;
  comments: number;
}

export interface Movie {
  id: string;
  title: string;
  genre: string;
  genres?: string[];
  year: number;
  rating: string;
  duration: string;
  description: string;
  posterGradient: string;
  posterUrl?: string;
  backdropUrl?: string;
  videoColor: string; // Dynamic glow surrounding the screen
  director: string;
  cast: string[];
  castMembers?: MovieCast[];
  score?: number;
  ratedCount?: string;
  rottenTomatoes?: number;
  imdb?: number;
  justWatch?: number;
  reviews?: MovieReview[];
}

export interface Actor {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  isFollowing: boolean;
  famousFor: string;
}

export interface SocialPost {
  id: string;
  author: string;
  handle: string;
  avatarSeed: string; // Determines styling
  content: string;
  timestamp: string;
  reactions: {
    love: number;
    fire: number;
    star: number;
  };
  hasReacted: {
    love: boolean;
    fire: boolean;
    star: boolean;
  };
  attachedTrackId?: string;
}

export interface LiveStream {
  id: string;
  channel: string;
  streamer: string;
  viewers: number;
  category: 'Music' | 'Cinema' | 'Chat';
  gradient: string;
  avatarSeed: string;
}

export interface AuraEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  attendeesCount: number;
  rsvpStatus: 'not_going' | 'going';
  description: string;
}

export const AURA_TRACKS: Track[] = [
  {
    id: 'track-coffee-bars',
    title: '1 Minute Final',
    artist: 'Chill Study (Your Uploaded Music)',
    duration: '1:00',
    genre: 'Smooth Lofi Beats',
    vibes: ['Cozy Rhodes', 'Warm Bass', 'Chill Hop'],
    cozyIndex: 100,
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-600',
    audioSynthType: 'aura-lofi'
  },
  {
    id: 'track-1',
    title: 'Raindrops on Log Rooftops',
    artist: 'Cabin Resonations',
    duration: '4:20',
    genre: 'Acoustic / Field Recordings',
    vibes: ['Relaxed', 'Rainy', 'Woodwork'],
    cozyIndex: 98,
    colorFrom: 'from-amber-800',
    colorTo: 'to-amber-950',
    audioSynthType: 'music'
  },
  {
    id: 'track-2',
    title: 'Solar Flare Symphony',
    artist: 'Andromeda Ambient',
    duration: '6:08',
    genre: 'Cosmic Drone',
    vibes: ['Ethereal', 'Spacious', 'Stellar'],
    cozyIndex: 45,
    colorFrom: 'from-purple-800',
    colorTo: 'to-indigo-950',
    audioSynthType: 'music'
  },
  {
    id: 'track-3',
    title: 'Fireside Pine Wood Crackle',
    artist: 'Hearth & Flute',
    duration: '5:45',
    genre: 'Warm Ambient',
    vibes: ['Cozy', 'Warmth', 'Crackling'],
    cozyIndex: 100,
    colorFrom: 'from-orange-700',
    colorTo: 'to-amber-900',
    audioSynthType: 'fireplace'
  },
  {
    id: 'track-4',
    title: 'Nebular Reflection',
    artist: 'Deep Space Curation',
    duration: '7:15',
    genre: 'Synths & Pads',
    vibes: ['Astral', 'Nebula', 'Pensive'],
    cozyIndex: 30,
    colorFrom: 'from-blue-700',
    colorTo: 'to-indigo-950',
    audioSynthType: 'music'
  },
  {
    id: 'track-5',
    title: 'Aura Dust (Lofi Mix)',
    artist: 'Stardust Beatmaker',
    duration: '3:52',
    genre: 'Chillhop / Aura Nodes',
    vibes: ['Chill', 'Nodes', 'Relaxed'],
    cozyIndex: 72,
    colorFrom: 'from-fuchsia-700',
    colorTo: 'to-violet-950',
    audioSynthType: 'music'
  }
];

export const AURA_MOVIES: Movie[] = [
  {
    id: 'movie-1',
    title: 'Cosmic Cruiser 11',
    genre: 'Sci-Fi / Space Opera',
    year: 2026,
    rating: 'PG-13',
    duration: '2h 14m',
    description: 'A stellar exploration fleet finds a pulsating super-node of ancient energy and gets drawn into a beautiful, spiraling cosmic warp.',
    posterGradient: 'from-indigo-900 via-purple-950 to-black',
    videoColor: 'rgba(147, 51, 234, 0.4)', // Purple
    director: 'Aura Valles',
    cast: ['Sarah Cooper', 'David Lin', 'Elena Rostova']
  },
  {
    id: 'movie-2',
    title: 'Cabin in the Stars',
    genre: 'Ambient Sci-Fi',
    year: 2025,
    rating: 'G',
    duration: '1h 50m',
    description: 'The story of a lone astrobiologist who builds a traditional pine-log cabin inside a massive biome ring orbiting Saturn.',
    posterGradient: 'from-amber-900 via-stone-900 to-black',
    videoColor: 'rgba(217, 119, 6, 0.35)', // Amber
    director: 'Marcus Wood',
    cast: ['Jane Doe', 'Clara Vance', 'Aura AI']
  },
  {
    id: 'movie-3',
    title: 'Deep Spectrum Space',
    genre: 'Cinematic Visual Novel',
    year: 2026,
    rating: 'PG',
    duration: '1h 35m',
    description: 'An interactive exploration of visual and auditory frequencies across the Andromeda galaxy, capturing pure cinematic waves.',
    posterGradient: 'from-rose-900 via-fuchsia-950 to-black',
    videoColor: 'rgba(244, 63, 94, 0.4)', // Rose
    director: 'Yuki Tanaka',
    cast: ['Narrator Alpha', 'Spectral Echoes']
  }
];

export const INITIAL_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    author: 'Sarah Cooper',
    handle: '@sarah_cooper',
    avatarSeed: 'sarah',
    content: 'Guys, check out this track "Solar Flare Symphony" in the Realms Explorer right now! The stellar chords are so spacious, feels like floating in a warm nebula. ✨🌌',
    timestamp: '12m ago',
    reactions: { love: 42, fire: 18, star: 9 },
    hasReacted: { love: false, fire: false, star: false },
    attachedTrackId: 'track-2'
  },
  {
    id: 'post-2',
    author: 'Marcus Wood',
    handle: '@marcus_wood',
    avatarSeed: 'marcus',
    content: 'Just synced the Cabin Audio system to "Fireside Pine Wood Crackle" while the projector is showing "Cabin in the Stars". Absolute peak relaxation levels achieved. 🪵🏡🔥',
    timestamp: '45m ago',
    reactions: { love: 28, fire: 34, star: 12 },
    hasReacted: { love: true, fire: false, star: false },
    attachedTrackId: 'track-3'
  },
  {
    id: 'post-3',
    author: 'Clara Vance',
    handle: '@clara_vance',
    avatarSeed: 'clara',
    content: 'Aura Connect allows us to dim the lights directly from our active playlists. The visual harmony between movies and the physical living room lights is genius.',
    timestamp: '2h ago',
    reactions: { love: 15, fire: 8, star: 24 },
    hasReacted: { love: false, fire: false, star: true }
  }
];

export const AURA_STREAMS: LiveStream[] = [
  {
    id: 'stream-1',
    channel: 'Deep Chill Space Beats',
    streamer: 'DJ Polaris',
    viewers: 1420,
    category: 'Music',
    gradient: 'from-violet-600 via-purple-700 to-pink-600',
    avatarSeed: 'polaris'
  },
  {
    id: 'stream-2',
    channel: 'Saturn Biome Cam 4K',
    streamer: 'Space Explorer',
    viewers: 890,
    category: 'Cinema',
    gradient: 'from-amber-600 via-orange-700 to-yellow-600',
    avatarSeed: 'saturn'
  },
  {
    id: 'stream-3',
    channel: 'Aura Social Chillout Node',
    streamer: 'Stellar Community',
    viewers: 2150,
    category: 'Chat',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    avatarSeed: 'social'
  }
];

export const INITIAL_AURA_EVENTS: AuraEvent[] = [
  {
    id: 'event-1',
    title: 'Aura Sounds Collective Party',
    date: 'Nov 11',
    time: '11:15 PM',
    attendeesCount: 312,
    rsvpStatus: 'going',
    description: 'Join the collaborative curation room for a synchronized ambient synth session and live visual projections.'
  },
  {
    id: 'event-2',
    title: 'Cabin in the Stars Premiere',
    date: 'Nov 15',
    time: '8:00 PM',
    attendeesCount: 145,
    rsvpStatus: 'not_going',
    description: 'Exclusively streaming for our member events hub. Direct live stream Q&A with director Marcus Wood.'
  },
  {
    id: 'event-3',
    title: 'Solar Wind Meditations',
    date: 'Nov 18',
    time: '10:00 PM',
    attendeesCount: 88,
    rsvpStatus: 'not_going',
    description: 'An ethereal multi-node meditative spatial sound wave therapy. Lay back and adjust your Light Dimmers to 10%.'
  }
];

// Helper to draw clean avatar colors
export function getAvatarColors(seed: string) {
  switch (seed) {
    case 'sarah':
      return { bg: 'bg-rose-500/20 text-rose-300 border-rose-500/40', text: 'Sarah' };
    case 'marcus':
      return { bg: 'bg-amber-500/20 text-amber-300 border-amber-500/40', text: 'Marcus' };
    case 'clara':
      return { bg: 'bg-purple-500/20 text-purple-300 border-purple-500/40', text: 'Clara' };
    case 'polaris':
      return { bg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40', text: 'Polaris' };
    case 'saturn':
      return { bg: 'bg-orange-500/20 text-orange-300 border-orange-500/40', text: 'Saturn' };
    default:
      return { bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', text: 'User' };
  }
}
